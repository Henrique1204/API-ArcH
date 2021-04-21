module.exports = async (req, res) => {
    try {
        res.status(200).send({ mensagem: 'Controller Clientes Get!' });
    } catch (erro) {
        console.log(erro);
    }
};