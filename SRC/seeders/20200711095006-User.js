'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',
      [
        { name: 'Juan', username: 'admin', surname: 'Palomo', password: '12345678', passport: '45080499S', questionSecret: 'Contraseña Imposible', answerSecret: 'Imposible de adivinar', isAdmin: true, ContactInfoId:17 },
        { name: 'Godofredo', username: 'Godofredo', surname: 'Perez', password: '12345678', passport: '25080499S', questionSecret: 'Contraseña Imposible', answerSecret: 'Imposible de adivinar', isAdmin: false, ContactInfoId:18 },
        { name: 'Julian', username: 'Julianito', surname: 'Costa', password: '12345678', passport: '55080499S', questionSecret: 'Contraseña Imposible', answerSecret: 'Imposible de adivinar', isAdmin: false, ContactInfoId:19 },
        { name: 'Fulanito', username: 'Fulano', surname: 'Rodriguez', password: '12345678', passport: '65080499S', questionSecret: 'Contraseña Imposible', answerSecret: 'Imposible de adivinar', isAdmin: false, ContactInfoId:20 },
        { name: 'Menganito', username: 'Mengano', surname: 'Martinez', password: '12345678', passport: '35080499X', questionSecret: 'Contraseña Imposible', answerSecret: 'Imposible de adivinar', isAdmin: false, ContactInfoId:21 },
        { name: 'Patricio', username: 'Patricio', surname: 'Esponja', password: '12345678', passport: '85080499S', questionSecret: 'Contraseña Imposible', answerSecret: 'Imposible de adivinar', isAdmin: false, ContactInfoId:22 },
        { name: 'Radamel', username: 'Radamel', surname: 'Falcao', password: '12345678', passport: '75080499M', questionSecret: 'Contraseña Imposible', answerSecret: 'Imposible de adivinar', isAdmin: false, ContactInfoId:23 },


      ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
