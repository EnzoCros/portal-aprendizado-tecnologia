const db = require('./db');

async function init() {
    await db.query(`CREATE TABLE IF NOT EXISTS conteudos (id INT AUTO_INCREMENT PRIMARY KEY, categoria VARCHAR(50), titulo VARCHAR(255), url TEXT, descricao TEXT, tag VARCHAR(50), subcategoria VARCHAR(100))`);
    console.log('Tabela OK!');
    require('./seed');
    setTimeout(() => require('./server'), 5000);
}

init().catch(console.error);