const request = require("supertest");
const app = require('../app');


describe('Ruta inicial /', () => {
    // happy path
    test('debe devolver una respuesta por GET', (done) => {
        request(app).get('/')
            .then((response) => {
                expect(response.statusCode).toBe(200);
                done();   
            });
    });

    // bad path  to index method post
    test('no debe devolver una respuesta por POST', (done) => {
        request(app).post('/')
            .then((response) => {
                expect(response.statusCode).toBe(404);
                expect(response.statusCode).not.toBe(200);
                done();   
            });
    });

    test('debe mostrar Bienvenido', (done) => {
        request(app).get('/')
            .then((response) => {
                expect(response.text).toMatch(/Bienvenido/)
                done();
            });
    });

})