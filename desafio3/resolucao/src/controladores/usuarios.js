const conexao = require('../conexao');
const securePassword = require('secure-password');
const pwd = securePassword();
const jwt = require('jsonwebtoken');
const jwtSecret = require('../jwt_secret');


const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: "O campo nome é obrigatório." });
    }
    if (!email) {
        return res.status(400).json({ mensagem: "O campo email é obrigatório." });
    }
    if (!senha) {
        return res.status(400).json({ mensagem: "O campo senha é obrigatório." });
    }

    try {
        const usuarioCadastrado = await conexao.query('select * from usuarios where email = $1', [email]);

        if (usuarioCadastrado.rowCount > 0) {
            return res.status(400).json({ mensagem: "Este email já está cadastrado." });
        }

        const hash = (await pwd.hash(Buffer.from(senha))).toString("hex");
        const query = 'insert into usuarios (nome, email, senha) values ($1, $2, $3)';
        const usuario = await conexao.query(query, [nome, email, hash]);

        if (usuario.rowCount === 0) {
            return res.status(400).json('Não foi possivel cadastrar o usuario');
        }
        const imprimirUsuario = await conexao.query('select * from usuarios where email = $1', [email]);

        return res.status(200).json({
            id: imprimirUsuario.rows[0].id,
            nome: imprimirUsuario.rows[0].nome,
            email: imprimirUsuario.rows[0].email
        });
    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }
}

const login = async (req, res) => {

    const { email, senha } = await req.body;

    if (!email) {
        return await res.status(400).json("O campo email é obrigatório.");
    };
    if (!senha) {
        return await res.status(400).json("O campo senha é obrigatório.");
    };

    try {
        const query = await 'select * from usuarios where email = $1';
        const usuarios = await conexao.query(query, [email]);

        if (usuarios.rowCount === 0) {
            return await res.status(404).json({ mensagem: 'E-mail ou senha incorretos, por favor tente novamente' });
        };

        const usuario = usuarios.rows[0];

        const resultado = await pwd.verify(Buffer.from(senha), Buffer.from(usuario.senha, "hex"))

        switch (resultado) {
            case securePassword.INVALID_UNRECOGNIZED_HASH:
            case securePassword.INVALID:
                return await res.json({ mensagem: 'Email ou senha incorretos' })
            case securePassword.VALID:
                break;
            case securePassword.VALID_NEEDS_REHASH:
                try {
                    const hash = (await pwd.hash(Buffer.from(senha))).toString("hex");
                    const query = 'update usuarios set senha = $1 where email = $2';
                    await conexao.query(query, [hash, email]);
                } catch (error) {
                }
                break;
        }

        const token = jwt.sign({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        }, jwtSecret);

        const imprimirUsuario = ({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        });

        return await res.json({ usuario: imprimirUsuario, token: token });
    } catch (error) {
        return await res.status(400).json({ mensagem: error.message });
    }

};

const detalharUsuario = async (req, res) => {
    try {
        // após gerar o token no endpoint de login, copiamos o token e colamos no header do 
        // endpont de detalhar usuario, assim capturamos ele aqui pelo req.headers
        const { token } = req.headers;

        const usuario = jwt.verify(token, jwtSecret);
        const query = 'select * from usuarios where id = $1';
        const usuarioDetalhado = await conexao.query(query, [usuario.id]);

        const imprimirUsuario = ({
            id: usuarioDetalhado.rows[0].id,
            nome: usuarioDetalhado.rows[0].nome,
            email: usuarioDetalhado.rows[0].email
        });

        return await res.json({ usuario: imprimirUsuario });
    } catch (error) {
        return await res.status(400).json({ mensagem: "Para acessar este recurso um token de autenticação válido deve ser enviado." });
    }
};

const atualizarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: "O campo nome é obrigatório." });
    }
    if (!email) {
        return res.status(400).json({ mensagem: "O campo email é obrigatório." });
    }
    if (!senha) {
        return res.status(400).json({ mensagem: "O campo senha é obrigatório." });
    };

    try {
        const { token } = req.headers;
        const usuario = jwt.verify(token, jwtSecret);
        const query = 'select * from usuarios where id = $1';
        const usuarioDetalhado = await conexao.query(query, [usuario.id]);

        const verificarEmail = await conexao.query('select * from usuarios where email = $1', [email]);

        if (verificarEmail.rowCount > 1) {
            return res.status(400).json({ mensagem: "Este email já está cadastrado." });
        } else {
            const hash = (await pwd.hash(Buffer.from(senha))).toString("hex");
            const query = 'update usuarios set nome = $1, email = $2, senha = $3 where id = $4';
            const usuario = await conexao.query(query, [nome, email, hash, usuarioDetalhado.rows[0].id]);

            if (usuario.rowCount === 0) {
                return res.status(404).json({ mensagem: 'Não foi possível atualizar o usuario' });
            } else {
                const usuario = usuarioDetalhado.rows[0];

                const resultado = await pwd.verify(Buffer.from(senha), Buffer.from(usuario.senha, "hex"))

                switch (resultado) {
                    case securePassword.INVALID_UNRECOGNIZED_HASH:
                    case securePassword.INVALID:
                        return await res.json({ mensagem: 'Email ou senha incorretos' })
                    case securePassword.VALID:
                        break;
                    case securePassword.VALID_NEEDS_REHASH:
                        try {
                            const hash = (await pwd.hash(Buffer.from(senha))).toString("hex");
                            const query = 'update usuarios set senha = $1 where email = $2';
                            await conexao.query(query, [hash, email]);
                        } catch (error) {
                        }
                        break;
                }

                const token = jwt.sign({
                    id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email
                }, jwtSecret);

                return await res.status(204).json();
            }
        }
    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }
};

const listarCategorias = async (req, res) => {
    try {
        const query = 'select * from categorias';
        const categorias = await conexao.query(query);

        return await res.json(categorias.rows);
    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }
};

const listarTransacoes = async (req, res) => {
    try {
        const { token } = req.headers;
        const usuario = jwt.verify(token, jwtSecret);
        const query = 'select * from usuarios where id = $1';
        const usuarioDetalhado = await conexao.query(query, [usuario.id]);

        const transacoes = await conexao.query(`select 
        transacoes.id as id,
        tipo,
        transacoes.descricao as descricao,
        valor,
        data,
        usuario_id,
        categoria_id,
        categorias.descricao as categoria_nome
        from transacoes 
        left join categorias on transacoes.categoria_id = categorias.id
        left join usuarios on transacoes.usuario_id = $1
        `, [usuarioDetalhado.rows[0].id]);

        return await res.json(transacoes.rows);
    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }
};

const listarTransacao = async (req, res) => {
    try {
        const { id } = req.params;


        const transacoes = await conexao.query(`select 
        transacoes.id as id,
        tipo,
        transacoes.descricao as descricao,
        valor,
        data,
        usuario_id,
        categoria_id,
        categorias.descricao as categoria_nome
        from transacoes
        join categorias on transacoes.categoria_id = categorias.id
        join usuarios on transacoes.usuario_id = usuarios.id
        where transacoes.id = $1
        `, [id]);

        return await res.json(transacoes.rows);
    } catch (error) {
        return res.status(404).json({ mensagem: error.message });
    }
};

const cadastrarTransacao = async (req, res) => {
    try {
        const { token } = req.headers;
        const usuario = jwt.verify(token, jwtSecret);
        const queryToken = 'select * from usuarios where id = $1';
        const usuarioDetalhado = await conexao.query(queryToken, [usuario.id]);

        const { tipo, descricao, valor, data, categoria_id } = req.body;

        if (!tipo || !descricao || !valor || !data || !categoria_id) {
            return res.status(400).json({ mensagem: "Todos os campos são obrigatórios." });
        };

        const verificarCategoria = await conexao.query('select * from categorias where id = $1', [categoria_id]);

        if (verificarCategoria.rowCount === 0) {
            return res.status(400).json({ mensagem: "Categoria não encontrada." });
        }

        if (tipo !== 'entrada' && tipo !== 'saida') {
            return res.status(400).json({ mensagem: "Tipo inválido." });
        }

        const queryTransacao = 'insert into transacoes (tipo, descricao, valor, data, categoria_id, usuario_id) values ($1, $2, $3, $4, $5, $6)';
        const transacao = await conexao.query(queryTransacao, [tipo, descricao, valor, data, categoria_id, usuarioDetalhado.rows[0].id]);

        if (transacao.rowCount === 0) {
            return res.status(400).json('Não foi possivel cadastrar a transacao');
        }

        const ultimoRegistro = await conexao.query('select max (id) from transacoes')
        const id = ultimoRegistro.rows[0].max;  // id do último registro inserido
        const transacaoDetalhada = await conexao.query('select * from transacoes where id = $1', [id]);

        return await res.status(201).json(transacaoDetalhada.rows[0]);
    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }
};

const atualizarTransacao = async (req, res) => {
    const { token } = req.headers;
    const usuario = jwt.verify(token, jwtSecret);
    const queryToken = 'select * from usuarios where id = $1';
    const usuarioDetalhado = await conexao.query(queryToken, [usuario.id]);

    const { descricao, valor, data, categoria_id, tipo } = req.body;

    if (!descricao || !valor || !data || !categoria_id || !tipo) {
        return res.json({ mensagem: "Todos os campos são obrigatórios." });
    }

    try {

        const verificarId = await conexao.query('select * from transacoes where id = $1', [req.params.id]);

        if (verificarId.rowCount === 0) {
            return res.status(404).json({ mensagem: "Transação não encontrada." });
        }

        const pertenceUsuario = await conexao.query('select * from transacoes where id = $1 and usuario_id = $2', [req.params.id, usuarioDetalhado.rows[0].id]);

        if (pertenceUsuario.rowCount === 0) {
            return res.status(401).json({ mensagem: "Transação não pertence ao usuário." });
        }

        const verificarCategoria = await conexao.query('select * from categorias where id = $1', [categoria_id]);

        if (verificarCategoria.rowCount === 0) {
            return res.status(400).json({ mensagem: "Categoria não encontrada." });
        };

        if (tipo !== 'entrada' && tipo !== 'saida') {
            return res.status(400).json({ mensagem: "Tipo inválido." });
        };

        const atualizarTransacao = await conexao.query('update transacoes set descricao = $1, valor = $2, data = $3, categoria_id = $4, tipo = $5 where id = $6', [descricao, valor, data, categoria_id, tipo, req.params.id]);

        const transacaoDetalhada = await conexao.query('select * from transacoes where id = $1', [req.params.id]);

        return await res.status(200).json(transacaoDetalhada.rows[0]);
    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }
};

const deletarTransacao = async (req, res) => {
    try {
        const { id } = req.params;


        const verificarId = await conexao.query('select * from transacoes where id = $1', [id]);

        if (verificarId.rowCount === 0) {
            return res.status(404).json({ mensagem: "Transação não encontrada." });
        }

        const pertenceUsuario = await conexao.query('select * from transacoes where id = $1', [id]);

        if (pertenceUsuario.rowCount === 0) {
            return res.status(401).json({ mensagem: "Transação não pertence ao usuário." });
        }

        const deletarTransacao = await conexao.query('delete from transacoes where id = $1', [id]);

        return await res.status(204).json();
    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }
};

const obterExtrato = async (req, res) => {
    const { token } = req.headers;
    const usuario = jwt.verify(token, jwtSecret);
    const queryToken = 'select * from usuarios where id = $1';
    const usuarioDetalhado = await conexao.query(queryToken, [usuario.id]);

    try {
        const entradas = await conexao.query('select sum (valor) from transacoes where usuario_id = $1 and tipo = \'entrada\'', [usuarioDetalhado.rows[0].id]);
        const saidas = await conexao.query('select sum (valor) from transacoes where usuario_id = $1 and tipo = \'saida\'', [usuarioDetalhado.rows[0].id]);

        const entrada = entradas.rows[0].sum;
        const saida = saidas.rows[0].sum;

        return await res.status(200).json({ entrada, saida });

    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }
};

module.exports = {
    login,
    cadastrarUsuario,
    detalharUsuario,
    atualizarUsuario,
    listarCategorias,
    listarTransacoes,
    listarTransacao,
    cadastrarTransacao,
    atualizarTransacao,
    deletarTransacao,
    obterExtrato
};