'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Offres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numAo: {
        type: Sequelize.STRING
      },
      typeAo: {
        type: Sequelize.STRING
      },
      natureAo: {
        type: Sequelize.STRING
      },
      maitreouvrage: {
        type: Sequelize.STRING
      },
      Openplis: {
        type: Sequelize.DATE
      },
      PubDate: {
        type: Sequelize.DATE
      },
      DelaiEx: {
        type: Sequelize.DATE
      },
      esti: {
        type: Sequelize.FLOAT
      },
      ass: {
        type: Sequelize.STRING
      },
      cautionD: {
        type: Sequelize.FLOAT
      },
      cautionP: {
        type: Sequelize.FLOAT
      },
      penalite: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Offres');
  }
};