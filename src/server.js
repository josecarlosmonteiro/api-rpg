const express = require('express');
const app = express();

const router = require('./router');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', router);

app.listen(
   8080,
   console.log("Servidor rodando em http://localhost:8080")
);