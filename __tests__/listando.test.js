const request = require("supertest");
const app = require("../index");

describe("Rota de listagem de veiculos", () => {
    test("Obtendo todos os veiculos", async () => {
        const res = await request(app).get("/veiculos")
        console.log(res.body);
        return res.body
    })
    test("Obtendo um veiculo", async () => {
        const res = await request(app).get("/veiculo/1")
        console.log(res.body);
        return res.body
    })
});

