const escolas = require('../database/player/escolas')

module.exports = {
   criarPlayer: nome => ({
      nome: nome,
      pontos: {
         vida: 100,
         mana: 100,
         stamina: 100,
         batalha: {
            ataque: 15,
            defesa: 12,
            magAtaque: 10,
            magDefesa: 8,
         },
      },
      escolas,
      mochila: [],
      equipados: [],
   })
}