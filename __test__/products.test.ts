import request from "supertest";
import sequelize from "../server/database/connection";
import app from "../server/app";
import buildTables from "../server/database/build";
const token = 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJzYXJhM0BnbWFpbC5jb20iLCJpYXQiOjE2NjY2OTk0MTZ9.gcWnqoUEY1VbhEwY5IiiXn4jioZ-HZOyEtvM-es4-lA'

beforeAll(() => buildTables());

describe("Product route must be returned the details of product according to the given id", () => {
  test("must return json file contains product info ", async () => {
    await request(app)
      .get("/api/v1/products/8")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect((res) => {
        expect(res.body.id).toBe(8);
        expect(res.body.title).toBe(
          "Louis Vuitton Jacques Durand Sunglasses Black Sunglasses"
        );
        expect(res.body.description).toBe(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"
        );
        expect(res.body["Category.name"]).toBe("Accessories");
        expect(res.body.user_id).toBe(5);
      });
  });

  test("must returns product doesn't exist anymore for invalid id", async () => {
    await request(app)
      .get("/api/v1/products/70")
      .expect(404)
      .expect("Content-Type", /json/)
      .expect({
        message: "This item doesn't exist anymore",
      });
  });

  test("must returns product doesn't exist anymore for invalid id", async () => {
    await request(app)
      .get("/api/v1/products/something")
      .expect(401)
      .expect("Content-Type", /json/)
      .expect({
        message: "Bad Request",
      });
  });
});

// DELETE
describe("deleting a product DELETE api/v1/products/:productId", () => {
  test('testing deleting a product when there\'s no token', async () => {
    await request(app)
      .delete('/api/v1/products/1')
      .expect(401)
      .expect({
        message: 'Unauthorized'
      })
  })

  test('testing deleting a product when the token is played with', async () => {
    await request(app)
      .delete('/api/v1/products/1')
      .set('Cookie', `${token}a`)
      .expect(401)
      .expect({
        message: 'Unauthorized'
      })
  })

  test('testing deleting a product when there\'s a token', async () => {
    await request(app)
      .delete('/api/v1/products/1')
      .set('Cookie', token)
      .expect(200)
      .expect({
        message: "Product deleted successfully"
      })
  })

  test('testing deleting a product for an invalid id', async () => {
    await request(app)
      .delete('/api/v1/products/-1')
      .set('Cookie', token)
      .expect(400)
      .expect({
        message: "Bad Request"
      })
  })

  test('testing deleting a product for an invalid id', async () => {
    await request(app)
      .delete('/api/v1/products/aa')
      .set('Cookie', token)
      .expect(400)
      .expect({
        message: "Bad Request"
      })
  })

  test('testing deleting an already deleted product', async () => {
    await request(app)
      .delete('/api/v1/products/1')
      .set('Cookie', token)
      .expect(400)
      .expect({
        message: "Bad Request"
      })
  })
})


describe("deleting a product PUT api/v1/products/:productId", () => {

  test('testing updating a product for an invalid id', async () => {
    await request(app)
      .put('/api/v1/products/-1')
      .set('Cookie', token)
      .send({
        title: "lorem",
        description: "lorem ipsum batikh"
      })
      .expect(400)
      .expect({
        message: "\"id\" must be greater than or equal to 1"
      })
  })

  test('testing updating a product for an invalid id', async () => {
    await request(app)
      .put('/api/v1/products/kfh')
      .set('Cookie', token)
      .send({
        title: "lorem",
        description: "lorem ipsum batikh"
      })
      .expect(400)
      .expect({
        message: "\"id\" must be a number"
      })
  })

  test('testing updating a product for an id that doesn\'t exist', async () => {
    await request(app)
      .put('/api/v1/products/200')
      .set('Cookie', token)
      .send({
        title: "lorem",
        description: "lorem ipsum batikh"
      })
      .expect(400)
      .expect({
        message: "Bad Request, id doesn't exist"
      })
  })

  test('testing updating a product for an id that doesn\'t exist', async () => {
    await request(app)
      .put('/api/v1/products/1')
      .set('Cookie', token)
      .send({
        title: "lorem",
        description: "lorem ipsum batikh"
      })
      .expect(400)
      .expect({
        message: "Bad Request, id doesn't exist"
      })
  })


  test('testing updating a product for a valid id', async () => {
    await request(app)
      .put('/api/v1/products/5')
      .set('Cookie', token)
      .send({
        title: "lorem",
        description: "lorem ipsum batikh"
      })
      .expect(201)
      .expect({
        message: "You updated your product successfully"
      })
  })
})


afterAll(() => sequelize.close());
