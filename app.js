const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
app.get('/', (req, res) => {
  res.send('API de Eventos - Online!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
