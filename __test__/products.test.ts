import request from "supertest";

import app from '../server/app';

describe('Product route must be returned the details of product according to the given id', () => {
    test('must return json file contains product info ', () => {
        request(app).get('api/v1/product/8')
        .expect(200)
        .expect("Content-Type",/json/)
        .expect({
            "title": "Louis Vuitton",
            "description": "Accessory in Gold",
            "gallery": [
                "https://cdn.rebelle.com//cd/cdac49d320221014-9-j8pnpt.JPG?width=514&height=510",
                "https://cdn.rebelle.com//86/8651792_daa1c738578a502c5b235a1171193928.JPG?width=514&height=510"
            ],
            "type": "donation",
            "created_at": "2022-10-17T08:34:44.137Z"
        });
    });

    test('must returns product doesn\'t exist anymore for invalid id', () => {
        request(app).get('api/v1/product/70')
        .expect(404)
        .expect("Content-Type",/text/)
        .expect('This item doesn\'t exist anymore');
    });

    test('must returns product doesn\'t exist anymore for invalid id', () => {
        request(app).get('api/v1/product/something')
        .expect(404)
        .expect("Content-Type",/text/)
        .expect('This item doesn\'t exist anymore');
    });
});
