const { select } = require('../repositories/clientes.repositorie');

module.exports = async (req, res) => {
    try {
        const { _nome, _email } = req.query;
        let consulta;

        if (_nome) consulta = await select('nome', _nome);
        else if (_email) consulta = await select('email', _email);
        else consulta = await select(null);

        res.status(200).send(consulta.resposta);
    } catch (erro) {
        console.log(erro);
    }
};