const express = require("express");
const router = express.Router();

const producroute  = require('../controller/product');


router.post('/addproduct',producroute.postproduct);
router.get('/getproducts',producroute.getproducts);




module.exports=router;