const request = require("supertest");
const app = require("../index");
describe("Rota de cadastro de veiculos", () => {
    userData = {
        "placa": "123454",
        "marca": "xxxxxt",
        "modelo": "xt",
        "versao": "xxxx",
        "ano": "2011"
    }
    test('Cadastro veiculo com body correto', async () => {
        //const res = await request(app).post("/veiculo").send(userData);
        //console.log(`Novo veiculo cadastrado com suscesso: ${res.body.id}`);
        // expect(res.statusCode).toEqual(200);
    });

})