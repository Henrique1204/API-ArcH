module.exports = async (req, res) => {
    try {
        res.status(201).send({ mensagem: 'Controller Clientes Post!' });
    } catch (erro) {
        console.log(erro);
    }
};