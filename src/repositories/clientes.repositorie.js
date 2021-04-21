const query = require('../models/query');

const select = async (campo, valor) => {
    let sql;

    if (campo === null) sql = 'SELECT * FROM clientes';
    else sql = `SELECT * FROM clientes WHERE ${campo} = '${valor}' ORDER by ${campo}`;

    const resposta = await query(sql, 'clientes', 'select');
    return resposta;
};

const insert = async (body) => {
    const { nome, email, cidade, estado } = body;

    const sql = (
        `INSERT INTO clientes (id, nome, email, cidade, estado) VALUES 
        (null, '${nome}', '${email}', '${cidade}', '${estado}')`
    );

    const resposta = await query(sql, 'clientes', 'insert');
    return resposta;
};

module.exports = {
    select,
    insert
};
