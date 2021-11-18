module.exports = [
   {
      id: 1,
      cenario: 'floresta',
      classe: 'comum',
      especie: ['animal'],
      nome: 'Aranhas venenosas',
      pontos: {
         vida: 120,
         mana: 0,
         ataque: 12,
         defesa: 8,
         magAtaque: 0,
         magDefesa: 0,
         critico: 0,
         velocidade: 75,
      },
      habilidade: 'N/A',
      especial: [
         {
            nome: 'Tiro de Teia',
            descricao: 'Atira uma teia no inimigo, diminuindo sua velicidade',
            alvo: 'player',
            calcEfeito: [
               {
                  message: this.alvo + ' perde 10% de velocidade',
                  attr: 'velocidade',
                  multiplicador: 0.9,
                  somador: 0,
               }
            ]
         }
      ]
   }
]