const { select } = require('../repositories/clientes.repositorie');
const ExceptionAPI = require('../util/ExceptionAPI');

module.exports = async (req, res) => {
    try {
        const { _nome, _email } = req.query;
        let consulta;

        if (_nome) consulta = await select('nome', _nome);
        else if (_email) consulta = await select('email', _email);
        else consulta = await select(null);

        if (!consulta.ok) throw new ExceptionAPI(null, consulta.resposta);

        if (consulta.resposta.length === 0) throw new ExceptionAPI(404);

        return res.status(200).send(consulta.resposta);
    } catch (erro) {
        if (erro.tipo === 'API') {
            const { cod, mensagem, erroSQL } = erro;

            if (erroSQL) return res.status(cod).send({ status: 'Falha', mensagem, erroSQL });
            return res.status(cod).send({ status: 'Falha', mensagem });
        }

        return res.status(500).send({ status: 'Falha', mensagem: erro.message });
    }
};