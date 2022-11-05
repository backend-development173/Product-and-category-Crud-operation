const Sequelize= require('sequelize');

const sequelize=require('../util/database')

const Product= sequelize.define('product', {
     id:{
       type: Sequelize.INTEGER,
       allowNull:false,
       autoIncrement:true,
       primaryKey: true
     },
     ProductName:Sequelize.STRING,
     Categoryname:Sequelize.STRING,
    
  
});

module.exports = Product;