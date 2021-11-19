describe("Teste de estrutura de mobs", () => {
   const mobs = require('../../../database/enemy/mobs');

   it('importação de mobs', () => {
      expect(mobs).not.toBe(undefined);
   })
})