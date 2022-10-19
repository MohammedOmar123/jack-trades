import request from "supertest";
import sequelize from "../server/database/connection";
import app from '../server/app';
import buildTables from '../server/database/build';

beforeAll(() => {
    return buildTables();
})
describe('Product route must be returned the details of product according to the given id', () => {
    test('must return json file contains product info ', async () => {
        await request(app).get('/api/v1/products/8')
            .expect(200)
            .expect("Content-Type", /json/)
            .expect((res) => {
                res.body.id = '8';
            });
    });

    test('must returns product doesn\'t exist anymore for invalid id', async () => {
        await request(app).get('/api/v1/products/70')
            .expect(404)
            .expect("Content-Type", /text/)
            .expect('This item doesn\'t exist anymore');
    });

    test('must returns product doesn\'t exist anymore for invalid id', async () => {
        await request(app).get('/api/v1/products/something')
            .expect(401)
            .expect("Content-Type", /text/)
            .expect('Bad Request');
    });
});

afterAll(() => {
    return sequelize.close();
})