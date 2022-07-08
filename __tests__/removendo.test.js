const request = require("supertest");
const app = require("../index");

describe("Rota de listagem de veiculos", () => {
    test("Removendo um veiculo", async () => {
        const res = await request(app).delete("/veiculo/35")
        console.log(res.body);
        return res.body
    })

});
