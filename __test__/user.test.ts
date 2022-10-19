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

afterAll(() => {
  return sequelize.close();
})