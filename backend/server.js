const express = require('express');
const cors = require('cors');
const conteudoRoutes = require('./routes/conteudo');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/conteudos', conteudoRoutes);

// Rota de teste
app.get('/', (req, res) => {
    res.json({ mensagem: 'Backend do Portal funcionando!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});