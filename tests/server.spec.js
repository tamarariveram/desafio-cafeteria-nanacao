const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
  it("GET /cafes devuelve status 200 y un arreglo con al menos 1 objeto", async () => {
    const response = await request(server).get("/cafes").send();
    const status = response.statusCode;
    const cafes = response.body;

    expect(status).toBe(200);
    expect(cafes).toBeInstanceOf(Array);
    expect(cafes.length).toBeGreaterThanOrEqual(1);
    expect(cafes[0]).toBeInstanceOf(Object);
  });

  it("DELETE /cafes/:id devuelve 404 si el id del café no existe", async () => {
    const jwt = "token";
    const idQueNoExiste = 999;

    const response = await request(server)
      .delete(`/cafes/${idQueNoExiste}`)
      .set("Authorization", jwt)
      .send();

    expect(response.statusCode).toBe(404);
  });

  it("POST /cafes agrega un nuevo café y devuelve status 201", async () => {
    const nuevoCafe = { id: 5, nombre: "Latte" };

    const response = await request(server).post("/cafes").send(nuevoCafe);
    const cafes = response.body;

    expect(response.statusCode).toBe(201);
    expect(cafes).toContainEqual(nuevoCafe);
  });

  it("PUT /cafes/:id devuelve 400 si el id del parámetro no coincide con el id del payload", async () => {
    const idParametro = 1;
    const cafeActualizado = { id: 2, nombre: "Cortado doble" };

    const response = await request(server)
      .put(`/cafes/${idParametro}`)
      .send(cafeActualizado);

    expect(response.statusCode).toBe(400);
  });
});
