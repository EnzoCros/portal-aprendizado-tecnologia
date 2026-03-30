const express = require('express');
const router = express.Router();
const db = require('../db');

// Busca todos os conteúdos
router.get('/', async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM conteudos');
        res.json(results);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao buscar conteúdos' });
    }
});

// Busca conteúdos por categoria
router.get('/:categoria', async (req, res) => {
    const { categoria } = req.params;
    try {
        const [results] = await db.query('SELECT * FROM conteudos WHERE categoria = ?', [categoria]);
        res.json(results);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao buscar conteúdos' });
    }
});

module.exports = router;