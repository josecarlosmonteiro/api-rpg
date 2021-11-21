const app = require('express').Router();

const { escolas, playerFunctions } = require('../database/player/index');

app.get('/', (req, res) => {
   res.json({
      message: 'successo',
      data: escolas
   })
});

app.post('/novo', (req, res) => {
   const { nome } = req.body;
   const novoPlayer = playerFunctions.criarPlayer(nome);

   res.json({
      message: 'success',
      data: novoPlayer,
   });
});

module.exports = router => router.use('/player', app);