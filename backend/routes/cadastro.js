const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db');

router.post('/', async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ erro: 'Preencha todos os campos!' });
    }

    try {
        const hash = await bcrypt.hash(senha, 10);
        await db.query(
            'INSERT INTO cadastros (nome, email, senha) VALUES (?, ?, ?)',
            [nome, email, hash]
        );
        res.status(201).json({ mensagem: 'Cadastro realizado com sucesso!' });
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ erro: 'Email já cadastrado!' });
        }
        res.status(500).json({ erro: err.message });
    }
});

module.exports = router;