const express = require('express');

const app = express();

app.get('/', (req, res) => {
   res.json({ message: 'Primeira rota criada.' })
});

app.listen(
   8080,
   console.log("Servidor rodando em http://localhost:8080")
);