const request = require("supertest");
const app = require("../index");
describe("Rota de atualização de veiculos", () => {
    userData = {
        "placa": "123454",
        "marca": "xxxxxt",
        "modelo": "xt",
        "versao": "xxxx",
        "ano": "2011"
    }
    test('Cadastro veiculo com body correto', async () => {
        const res = await request(app).post("/veiculoAtualizacao/1").send(userData);
        console.log(`Veiculo atualizado com suscesso: ${res.body.id}`);
        expect(res.statusCode).toEqual(302);
    });

})