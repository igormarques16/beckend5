const express = require('express');
const app = express();
const port = 3000;

// Importa o router
const calculadoraRouter = require('./routes/calculadora');

// Middleware para JSON
app.use(express.json());

// Usa o router
app.use('/calculadora', calculadoraRouter);

// Rota inicial
app.get('/', (req, res) => {
  res.send('API Calculadora está rodando 🚀');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = app; // export para testes
