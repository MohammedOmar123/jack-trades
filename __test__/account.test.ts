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
                    expect(res.body.msg).toEqual('First name is a required field so be sure to fill it on');
                })
        })
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
                    expect(res.body.msg).toEqual('First name is a required field so be sure to fill it on');
                })
        })
    test('returns error message when user enters invalid first name',
        async () => {
            await request(app)
                .post('/api/v1/account/signup')
                .send({
                    firstName: "mohammed2",
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.msg).toEqual('First name must contains only letters and at least [2-20]');
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
                    expect(res.body.msg).toEqual('Last name is a required field so be sure to fill it on');
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
                    expect(res.body.msg).toEqual('Last name is a required field so be sure to fill it on');
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
                    expect(res.body.msg).toEqual('Last name must contains only letters and at least [2-20]');
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
                    expect(res.body.msg).toEqual('Last name must contains only letters and at least [2-20]');
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
                    expect(res.body.msg).toEqual('Email is a required field so be sure to fill it on');
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
                    expect(res.body.msg).toEqual('Email is a required field so be sure to fill it on');
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
                    expect(res.body.msg).toEqual("Please check your email again, this isn't valid email !");
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
                    expect(res.body.msg).toEqual("Please check your email again, this isn't valid email !");
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
                    expect(res.body.msg).toEqual("Password is a required field so be sure to fill it on");
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
                    password: "",
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.msg).toEqual("Password is a required field so be sure to fill it on");
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
                    password: "password",
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.msg).toEqual("Password must be at least 6 characters from letters,digits and special characters");
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
                    password: "password123",
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.msg).toEqual("Password must be at least 6 characters from letters,digits and special characters");
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
                    password: "password$",
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.msg).toEqual("Password must be at least 6 characters from letters,digits and special characters");
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
                    password: "password13$",
                    confirmPassword:""
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.msg).toEqual('Passwords are\'nt matched');
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
                    password: "password13$",
                    confirmPassword:"password123"
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.msg).toEqual('Passwords are\'nt matched');
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
                    password: "password13$",
                })
                .expect(400)
                .expect((res) => {
                    expect(res.body.msg).toEqual('confirm Password is a required field so be sure to fill it on');
                })
        });
})


afterAll(() => sequelize.close());
