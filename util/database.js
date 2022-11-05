const Sequelize=require('sequelize')

const sequelize= new Sequelize('Assignment','root','typepassword',{
    dialect:'mysql',
    host:'localhost'
})



module.exports=sequelize;