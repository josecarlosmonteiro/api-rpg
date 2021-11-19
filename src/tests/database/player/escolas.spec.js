describe("Testando escolas no banco de dados", () => {
   const escolas = require('../../../database/player/escolas');
   const camposNecessarios = ['name', 'type', 'description', 'level', 'xp', 'nextLevel'];

   it("existir dados para escolas", () => {
      expect(escolas).not.toBe(undefined);
      expect(escolas).not.toBe(null);
   })

   it("retornar dados de escolas em formato de objeto", () => {
      expect(typeof escolas).toBe("object");
   })

   it("checar todas as props de cada escola", () => {
      for (let escola in escolas) {
         for (let prop of camposNecessarios) {
            if (prop == "xp") {
               expect(escolas[escola][prop]).toBe(undefined);
            } else {
               expect(escolas[escola][prop]).not.toBe(undefined);
            }
         }
      }
   })
})