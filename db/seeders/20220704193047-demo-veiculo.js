'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Veiculos', [{
      placa: '123456',
      marca: 'xxxxx',
      modelo: 'x',
      versao: 'xxxx',
      ano: '2010',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Veiculos', null, {});
  }
};