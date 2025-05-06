// app.js
const express = require('express');
const app = express();
require('dotenv').config();
const eventoRoutes = require('./routes/evento');

app.use(express.json());
app.use('/eventos', eventoRoutes); // Isso conecta a rota corretamente

app.get('/', (req, res) => {
  res.send('API de Eventos - Online!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
