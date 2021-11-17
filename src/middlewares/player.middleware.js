const app = require('express').Router();
const player = require('../database/player/index');

app.get('/', (req, res) => {
   res.json({
      message: 'success',
      data: player
   })
});

module.exports = router => router.use('/player', app);