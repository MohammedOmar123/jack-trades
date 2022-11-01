import request from "supertest";

import app from "../server/app";
import sequelize from "../server/database/connection";
import buildTables from "../server/database/build";

beforeAll(() => {
    return buildTables();
});
const token = "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJKb2huQGdtYWlsLmNvbSIsImlhdCI6MTY2NjY5OTQxNn0.JczMifcbYE9z53Lmt9IL_QV7z3D7YA2wn0zZIFGwwjk";

describe("Test Add New Requests", () => {
    it("validate request inputs>> should return 400 when the user enters invalid productId ", async () => {
        await request(app)
            .post("/api/v1/requests/")
            .send({
                "productId": "sq",
                "products": [1, 5]
            })
            .set('Cookie', token)
            .expect(400)
            .expect("Content-Type", /json/)
            .expect({
                "message": "\"productId\" must be a number"
            });
    });
    it("validate request inputs>> should return 400 when the user enters invalid products ", async () => {
        await request(app)
            .post("/api/v1/requests/")
            .send({
                "productId": 3,
                "products": "[1,5]"
            })
            .set('Cookie', token)
            .expect(400)
            .expect("Content-Type", /json/)
            .expect({
                "message": "\"products\" must be an array"
            });
    });
    it("validate request inputs>> should return 400 when the user doesn't add a productId ", async () => {
        await request(app)
            .post("/api/v1/requests/")
            .send({
                "products": "[1,5]"
            })
            .set('Cookie', token)
            .expect(400)
            .expect("Content-Type", /json/)
            .expect({
                "message": "\"productId\" is required"
            });
    });

    it("validate request inputs>> should return 400 when the user doesn't add a products ", async () => {
        await request(app)
            .post("/api/v1/requests/")
            .send({
                "productId": 7,
            })
            .set('Cookie', token)
            .expect(400)
            .expect("Content-Type", /json/)
            .expect({
                "message": "Please add products to exchange"
            });
    });

    it("validate request inputs>> should return 400 when the user doesn't add a products ", async () => {
        await request(app)
            .post("/api/v1/requests/")
            .send({
                "productId": 7,
                "products":[],

            })
            .set('Cookie', token)
            .expect(400)
            .expect("Content-Type", /json/)
            .expect({
                "message": "Please add products to exchange"
            });
    });

    it("validate request inputs>> should return 400 when the user enters invalid productId", async () => {
        await request(app)
            .post("/api/v1/requests/")
            .send({
                "productId": 99,
                "products":[],

            })
            .set('Cookie', token)
            .expect(400)
            .expect("Content-Type", /json/)
            .expect({
                "message": "Please request a valid product"
            });
    });

    it("should return 400 when the user make a request at his own items ", async () => {
        await request(app)
            .post("/api/v1/requests/")
            .send({
                "productId": 3,
                "products":[3],

            })
            .set('Cookie', token)
            .expect(400)
            .expect("Content-Type", /json/)
            .expect({
                "message": "You can't request your items"
            });
    });
    
    it("should return 400 when the user enters invalid products id", async () => {
        await request(app)
            .post("/api/v1/requests/")
            .send({
                "productId": 7,
                "products":[7,8],

            })
            .set('Cookie', token)
            .expect(400)
            .expect("Content-Type", /json/)
            .expect({
                "message": "Please check your selected product"
            });
    });

    it("should return 201 when the user made a success request", async () => {
        await request(app)
            .post("/api/v1/requests/")
            .send({
                "productId": 7,
                "products":[3],

            })
            .set('Cookie', token)
            .expect(201)
            .expect("Content-Type", /json/)
            .expect({
                 message: 'request sent successfully' 
            });
    });

    it("should return 400 when the user request the same item again", async () => {
        await request(app)
            .post("/api/v1/requests/")
            .send({
                "productId": 7,
                "products":[3],

            })
            .set('Cookie', token)
            .expect(400)
            .expect("Content-Type", /json/)
            .expect({
                 message: 'You already requested this item'
            });
    });

});

afterAll(() => sequelize.close());
