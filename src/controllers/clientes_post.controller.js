const ExceptionAPI = require('../util/ExceptionAPI');
const { select, insert } = require('../repositories/clientes.repositorie');

module.exports = async (req, res) => {
    try {
        const { nome, email, cidade, estado } = req.body;

        if (!nome || !email || !cidade || !estado) throw new ExceptionAPI(400);

        const consultaSelect = await select('email', email);
        if (consultaSelect.resposta.length !== 0) throw new ExceptionAPI(422);

        const { ok, resposta } = await insert(req.body);
        if (!ok) throw new ExceptionAPI(null, resposta);

        return res.status(201).send(resposta);
    } catch (erro) {
        if (erro.tipo === 'API') {
            const { cod, mensagem, erroSQL } = erro;

            if (erroSQL) return res.status(cod).send({ status: 'Falha', mensagem, erroSQL });
            return res.status(cod).send({ status: 'Falha', mensagem });
        }

        return res.status(500).send({ status: 'Falha', mensagem: erro.message });
    }
};