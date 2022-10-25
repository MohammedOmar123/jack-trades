import request from "supertest";
import sequelize from "../server/database/connection";
import app from "../server/app";
import buildTables from "../server/database/build";

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

afterAll(() => sequelize.close());
