const query = require('../models/query');

const select = async (campo, valor) => {
    let sql;

    if (campo === null) sql = 'SELECT * FROM clientes';
    else sql = `SELECT * FROM clientes WHERE ${campo} = '${valor}' ORDER by ${campo}`;

    const resposta = await query(sql, 'clientes', 'select');
    return resposta;
};

module.exports = {
    select
};
