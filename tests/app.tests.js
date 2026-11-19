const request = require("supertest");
const app = require('../app');

//Agrupando las pruebas
//request(app).get(...) simula una petición, como un navegador
//expect(...).toBe(...) compara el resultado real con el esperado. Si no coinciden, la prueba falla
describe("API de curso", () => {
    test('GET /api/cursos responde 200 y una lista', async() => {
        const res = await request(app).get('/api/cursos');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(2);
    })

    test('GET /api/cursos/1 devuelve el curso correcto', async () => {
        const res = await request(app).get('/api/cursos/1');
        expect(res.body.nombre).toBe('Desarrollo Full Stack');
    });

    test('GET /api/cursos/99 responde 404', async () => {
        const res = await request(app).get('/api/cursos/99');
        expect(res.statusCode).toBe(404);
    });
})