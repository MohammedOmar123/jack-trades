import request from "supertest";

import app from "../server/app";
import sequelize from "../server/database/connection";
import buildTables from "../server/database/build";

beforeAll(() => {
  return buildTables();
})

describe('Testing "GET api/v1/user/:userId" to get all user profile informations', () => {
  it('right USERID and return profile  information successfully!', async () => {
    const response = await request(app)
      .get('/api/v1/user/5')
      .expect(200)
      .expect("Content-Type", /json/)
      .expect({
        "first_name": "Laurete",
        "last_name": "da Cunha",
        "image": "https://randomuser.me/api/portraits/lego/4.jpg",
        "bio": "hello from the hell"
      })
  })

  it('wrong USERID and return a massage describe the error', async () => {
    const response = await request(app)
      .get('/api/v1/user/100')
      .expect(404)
      .expect('Content-Type', /json/)
      .expect({
        msg: "Opss, User Not Found"
      })
  })
})

describe('user route tests', () => {
  it('testing getting the user products', async () => {
    await request(app).get('/api/v1/user/5/products')
      .expect(200)
      .expect("Content-Type", /json/)
      .expect((res) => {
        res.body.data.length = 1;
        res.body.data[0].id = 5;
        res.body.data[0].title = 'Louis Vuitton';
      })
  })

  it('testing getting the user products', async () => {
    await request(app).get('/api/v1/user/2/products')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        res.body.data.length == 5;
        res.body.data[0].id == 5;
      })
  })

  it('testing getting the user products', async () => {
    await request(app).get('/api/v1/user/hello/products')
      .expect(401)
      .expect('Content-Type', /text/)
      .expect('Bad Request')
  })
})

afterAll(() => sequelize.close());
