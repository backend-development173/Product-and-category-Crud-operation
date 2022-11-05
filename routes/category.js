const express = require("express");
const router = express.Router();

const categorycont  = require('../controller/category');


router.post('/category',categorycont.postcategory);

router.get('/getAllcategory',categorycont.getAllcategory);

router.delete('/deletecategory/:id',categorycont.deletecategory)

router.post('/editcategory/:id',categorycont.editcategory)






module.exports=router;