'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', 
    [
      {name: 'Juan', username: 'JuanitoP', surname:'Palomo', password: '12345678', passport: '45080499S', token: '', questionSecret: 'Contraseña Imposible', answerSecret:'Imposible de adivinar', isAdmin:false },
      {name: 'Godofredo', username: 'Godofredo', surname:'Perez', password: '12345678', passport: '25080499S', token: '', questionSecret: 'Contraseña Imposible', answerSecret:'Imposible de adivinar', isAdmin:false },
      {name: 'Julian', username: 'Julianito', surname:'Costa', password: '12345678', passport: '55080499S', token: '', questionSecret: 'Contraseña Imposible', answerSecret:'Imposible de adivinar', isAdmin:false },
      {name: 'Fulanito', username: 'Fulano', surname:'Rodriguez', password: '12345678', passport: '65080499S', token: '', questionSecret: 'Contraseña Imposible', answerSecret:'Imposible de adivinar', isAdmin:false },
      {name: 'Menganito', username: 'Mengano', surname:'Martinez', password: '12345678', passport: '35080499X', token: '', questionSecret: 'Contraseña Imposible', answerSecret:'Imposible de adivinar', isAdmin:false },
      {name: 'Patricio', username: 'Patricio', surname:'Esponja', password: '12345678', passport: '85080499S', token: '', questionSecret: 'Contraseña Imposible', answerSecret:'Imposible de adivinar', isAdmin:false },
      {name: 'Radamel', username: 'Radamel', surname:'Falcao', password: '12345678', passport: '75080499M', token: '', questionSecret: 'Contraseña Imposible', answerSecret:'Imposible de adivinar', isAdmin:false },

      
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
