const conexaoDB = require('./dbCon');

const tiposErros = {
    select: 'Erro ao buscar por dados na tabela',
    insert: 'Erro ao adicionar dados na tabela'
};

/**
* @param { String } sql
* @param { String } tabela
* @param { String } tipo
*/
module.exports = (sql, tabela, tipo) => (
    new Promise((resolve) => {
        conexaoDB.query(sql, (erroDB, resDB) => {
            if (erroDB) {
                const erro = {
                    cod: 502,
                    mensagem: `${tiposErros[tipo]} ${tabela}.`,
                    erroSQL: erroDB.sqlMessage
                };

                return resolve({ ok: false, resposta: erro });
            }

            if (tipo === 'select') return resolve({ ok: true, resposta: resDB });

            const resposta = { status: 'Sucesso', mensagem: 'Dados adicionados com sucesso!' };
            return resolve({ ok: true, resposta });
        });
    })
);
