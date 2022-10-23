import request from "supertest";
import sequelize from "../server/database/connection";
import app from '../server/app';
import buildTables from '../server/database/build';

beforeAll(() => buildTables());

describe('Product route must be returned the details of product according to the given id', () => {
    test('must return json file contains product info ', async () => {
        await request(app).get('/api/v1/products/8')
            .expect(200)
            .expect("Content-Type", /json/)
            .expect((res) => {
                expect(res.body.id).toBe(8);
                expect(res.body.title).toBe('Louis Vuitton');
                expect(res.body.description).toBe('Accessory in Gold');
            })
    });

    test('must returns product doesn\'t exist anymore for invalid id', async () => {
        await request(app).get('/api/v1/products/70')
            .expect(404)
            .expect("Content-Type", /json/)
            .expect({
                "msg": "This item doesn't exist anymore"
            });
    });

    test('must returns product doesn\'t exist anymore for invalid id', async () => {
        await request(app).get('/api/v1/products/something')
            .expect(401)
            .expect("Content-Type", /json/)
            .expect({
                "msg": "Bad Request"
            });
    });
});

afterAll(() => sequelize.close());
