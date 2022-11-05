
const Category  = require('../model/category');



exports.postcategory= ((req,res)=>{
  const category  = req.body.valuecate;
console.log(category)
  Category.create({
    category :category
  }).then(()=>{
    res.json({sucess:true, message:'category added to database'});
  }).catch(err=>{
    console.log(err);
  })
})

//getall category

exports.getAllcategory=(req,res,next)=>{
    Category.findAll({attributes:['id','category']}).then(data=>{
        res.status(200).json(data)
    }).catch(err=>{
        res.status(400).json({success:false,message:"something went wrong"})
    })
}

// delete category 
exports.deletecategory=(req,res,next)=>{
    let id=req.params.id;
    console.log(id + " line3ffff0");
   Category.destroy({where:{
        id:id
    }}).then(result=>{
        res.status(200).json({success:true,message:'deleted Successfully'})
    }).catch(err=>{
        res.status(400).json({success:false,message:'something went wrong'})
    })

}
/// edit category

exports.editcategory = (req,res) =>{
 const id = req.params.id;
 Category.findOne({where :{id:id}}).then(data =>{
    const obj  = data.dataValues;
    return res.status(200).json({success:true,message:'edit category',obj})
 }).then(()=>{
    Category.destroy({where:{id:id}}).then(res=>{
        console.log("done");
    })
 }).catch(err=>{
    console.log(err);
 })

}