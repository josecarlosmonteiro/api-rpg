const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
   res.json({ message: 'Primeira rota criada.' })
});

require('./middlewares/player.middleware')(router);

module.exports = router;