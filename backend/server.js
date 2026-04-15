const express = require('express');
const cors = require('cors');
const conteudoRoutes = require('./routes/conteudo');
// const cadastroRoutes = require('./routes/cadastro');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/conteudos', conteudoRoutes);
// app.use('/api/cadastro', cadastroRoutes);

app.get('/', (req, res) => {
    res.json({ mensagem: 'Backend do Portal funcionando!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});