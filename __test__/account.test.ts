import request from "supertest";
import sequelize from "../server/database/connection";
import app from '../server/app';
import buildTables from '../server/database/build';

beforeAll(() => buildTables());

describe('Validations tests should return errors messages to the user', () => {
    test('when user enters empty first Name',
        async () => {
            await request(app)
                .post('/api/v1/account/signup')
                .send({
                    lastName: "omar"
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.message).toEqual('First name is required');
                })
        });

    test('when user enters empty first Name',
        async () => {
            await request(app)
                .post('/api/v1/account/signup')
                .send({
                    firstName: "",
                    lastName: "omar"
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.message).toEqual('First name is required');
                })
        });

    test('returns error message when user enters invalid first name',
        async () => {
            await request(app)
                .post('/api/v1/account/signup')
                .send({
                    firstName: "mohammed2",
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.message).toEqual('First name must be 2-20 characters long, and contain only letters.');
                })
        });

    test('returns error message when user enters empty last Name'
        , async () => {
            await request(app)
                .post('/api/v1/account/signup')
                .send({
                    firstName: "mohammed",
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.message).toEqual('Last name is required');
                })
        });

    test('returns error message when user enters empty last Name'
        , async () => {
            await request(app)
                .post('/api/v1/account/signup')
                .send({
                    firstName: "mohammed",
                    lastName: "",
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.message).toEqual('Last name is required');
                })
        });

    test('returns error message when user enters invalid last name'
        , async () => {
            await request(app)
                .post('/api/v1/account/signup')
                .send({
                    firstName: "Mohammed",
                    lastName: "Omar2",
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.message).toEqual('Last name must be 2-20 characters long, and contain only letters.');
                })
        })

    test('returns error message when user enters invalid last name'
        , async () => {
            await request(app)
                .post('/api/v1/account/signup')
                .send({
                    firstName: "Mohammed",
                    lastName: "Omar2",
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.message).toEqual('Last name must be 2-20 characters long, and contain only letters.');
                })
        });

    test('returns error message when user enters an empty email'
        , async () => {
            await request(app)
                .post('/api/v1/account/signup')
                .send({
                    firstName: "Mohammed",
                    lastName: "Omar",
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.message).toEqual('Email is required');
                })
        });

    test('returns error message when user enters an empty email'
        , async () => {
            await request(app)
                .post('/api/v1/account/signup')
                .send({
                    firstName: "Mohammed",
                    lastName: "Omar",
                    email: "",
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.message).toEqual('Email is required');
                })
        });

    test('returns error message when user enters an invalid email'
        , async () => {
            await request(app)
                .post('/api/v1/account/signup')
                .send({
                    firstName: "Mohammed",
                    lastName: "Omar",
                    email: "mohammed@gmailcom",
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.message).toEqual("Invalid Email");
                })
        });

    test('returns error message when user enters an invalid email'
        , async () => {
            await request(app)
                .post('/api/v1/account/signup')
                .send({
                    firstName: "Mohammed",
                    lastName: "Omar",
                    email: "mohammedgmail.com",
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.message).toEqual("Invalid Email");
                })
        });

    test('returns error message when user enters an empty password'
        , async () => {
            await request(app)
                .post('/api/v1/account/signup')
                .send({
                    firstName: "Mohammed",
                    lastName: "Omar",
                    email: "mohammed@gmail.com",

                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.message).toEqual("Password is required");
                })
        });

    test('returns error message when user enters an empty password'
        , async () => {
            await request(app)
                .post('/api/v1/account/signup')
                .send({
                    firstName: "Mohammed",
                    lastName: "Omar",
                    email: "mohammed@gmail.com",
                    hashedPassword: "",
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.message).toEqual("Password is required");
                })
        });

        test('returns error message when user enters an invalid password'
        , async () => {
            await request(app)
                .post('/api/v1/account/signup')
                .send({
                    firstName: "Mohammed",
                    lastName: "Omar",
                    email: "mohammed@gmail.com",
                    hashedPassword: "password",
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.message).toEqual("Password must be at least 6 characters, and contain letters, digits and special characters only.");
                })
        });

        test('returns error message when user enters an invalid password'
        , async () => {
            await request(app)
                .post('/api/v1/account/signup')
                .send({
                    firstName: "Mohammed",
                    lastName: "Omar",
                    email: "mohammed@gmail.com",
                    hashedPassword: "password123",
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.message).toEqual("Password must be at least 6 characters, and contain letters, digits and special characters only.");
                })
        });
        
        test('returns error message when user enters an invalid password'
        , async () => {
            await request(app)
                .post('/api/v1/account/signup')
                .send({
                    firstName: "Mohammed",
                    lastName: "Omar",
                    email: "mohammed@gmail.com",
                    hashedPassword: "password$",
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.message).toEqual("Password must be at least 6 characters, and contain letters, digits and special characters only.");
                })
        });

        test('returns error message when user enters not matched confirm password'
        , async () => {
            await request(app)
                .post('/api/v1/account/signup')
                .send({
                    firstName: "Mohammed",
                    lastName: "Omar",
                    email: "mohammed@gmail.com",
                    hashedPassword: "password13$",
                    confirmPassword:""
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.message).toEqual('Passwords are\'nt matched');
                })
        });

        test('returns error message when user enters not matched confirm password'
        , async () => {
            await request(app)
                .post('/api/v1/account/signup')
                .send({
                    firstName: "Mohammed",
                    lastName: "Omar",
                    email: "mohammed@gmail.com",
                    hashedPassword: "password13$",
                    confirmPassword:"password123"
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.message).toEqual('Passwords are\'nt matched');
                })
        });

        test('returns error message when user enters not matched confirm password'
        , async () => {
            await request(app)
                .post('/api/v1/account/signup')
                .send({
                    firstName: "Mohammed",
                    lastName: "Omar",
                    email: "mohammed@gmail.com",
                    hashedPassword: "password13$",
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.message).toEqual('confirm Password is required');
                })
        });
})

describe('test signup when the user enters a valid inputs', () => {
    test('returns success message when user enters a valid inputs'
    , async () => {
        await request(app)
            .post('/api/v1/account/signup')
            .send({
                firstName: "Mohammed",
                lastName: "Omar",
                email: "mohammed@gmail.com",
                hashedPassword: "password13$",
                confirmPassword:"password13$"
            })
            .expect((res) => {
                expect(res.body.message).toEqual('Your Account Created Successfully');
            })
    });

    test('returns error message when user an existing email'
    , async () => {
        await request(app)
            .post('/api/v1/account/signup')
            .send({
                firstName: "Mohammed",
                lastName: "Omar",
                email: "mohammed@gmail.com",
                hashedPassword: "password13$",
                confirmPassword:"password13$"
            })
            .expect(400)
            .expect((res) => {
                expect(res.body.message).toEqual('This email is already exist,Please check your email again');
            })
    });
})

afterAll(() => sequelize.close());
