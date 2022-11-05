const Sequelize  = require('sequelize');

const sequelize   = require('../util/database');

const category   = sequelize.define('Category',{
    id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey: true
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false
      },


})

module.exports  = category;
