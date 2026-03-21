const express = require('express');
const router = express.Router();
const db = require('../db');

// Busca todos os conteúdos
router.get('/', (req, res) => {
    db.query('SELECT * FROM conteudos', (err, results) => {
        if (err) {
            res.status(500).json({ erro: 'Erro ao buscar conteúdos' });
            return;
        }
        res.json(results);
    });
});

// Busca conteúdos por categoria
router.get('/:categoria', (req, res) => {
    const { categoria } = req.params;
    db.query('SELECT * FROM conteudos WHERE categoria = ?', [categoria], (err, results) => {
        if (err) {
            res.status(500).json({ erro: 'Erro ao buscar conteúdos' });
            return;
        }
        res.json(results);
    });
});

module.exports = router;