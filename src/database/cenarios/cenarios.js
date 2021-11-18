module.exports = {
   floresta: {
      name: 'Floresta',
      descricao: 'A floresta é um lugar lindo e tranquilo, mas também é um cenário traiçoeiro e lar de várias espécies medonhas e perigosas.',
      efeito: 'Todos os tipos de cura recebem bônus de 15% em seu efeito.',
      calcEfeito: [
         {
            message: '+15% de cura',
            alvo: ['item', 'magia', 'efeito'],
            multiplicador: 1.15, somador: 0,
         },
      ]
   }
}