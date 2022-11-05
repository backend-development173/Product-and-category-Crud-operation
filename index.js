const express  = require('express');
const  app   = express();
const cors=require('cors');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const sequelize = require("./util/database");
app.use(cors());
const category  =  require('./routes/category');
const product  =require('./routes/product');
app.use(category);
app.use(product);
const Product = require('./model/product');
const Category   = require('./model/category');


Category.hasMany(Product);
Product.belongsTo(Category);


sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
