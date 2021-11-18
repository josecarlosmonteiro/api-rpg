const app = require('express')();
const mobs = require('../database/enemy/index');

app.get('/', (req, res) => {
   res.json({
      message: 'Enemy route',
      data: mobs,
   })
})

module.exports = router => router.use('/enemy', app);