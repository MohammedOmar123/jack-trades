import request from "supertest";

import { app } from "../server/app";
import sequelize from "../server/database/connection";
import buildTables from "../server/database/build";

beforeAll(() => {
    return buildTables();
});

describe("Statistics routes test!", () => {
    it("test donateTimes", async () => {
        expect(2).toBe(2);
    });
});
afterAll(() => sequelize.close());
