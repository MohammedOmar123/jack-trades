import supertest from "supertest";
import app from "../server/app";
import sequelize from "../server/database/connection";
import buildTables from "../server/database/build";

beforeAll(()=> buildTables());

describe('user route tests', () =>{
    it('testing getting the user products', async () =>{
       await supertest(app).get('/api/v1/user/5/products')
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            res.body.data.length = 1;
            res.body.data[0].id = 5;
            res.body.data[0].title = 'Louis Vuitton';
        })
    })

    it('testing getting the user products', async () =>{
        await supertest(app).get('/api/v1/user/2/products')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect((res) => {
            res.body.data.length == 5;
            res.body.data[0].id == 5;
        })
    })

    it('testing getting the user products', async () =>{
        await supertest(app).get('/api/v1/user/hello/products')
        .expect(401)
        .expect('Content-Type', /text/)
        .expect('Bad Request')
    })
})

afterAll(() => sequelize.close());