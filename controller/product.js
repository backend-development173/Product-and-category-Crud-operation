const Product  = require('../model/product');
const Category = require('../model/category');

    exports.postproduct = (req, res) => {
      
       const {productname,categoryname}  = req.body;
      
     Category.findOne({where :{category:categoryname}}).then(res=>{
        console.log("sfs")
        console.log(res.dataValues.id);
      return  res.dataValues.id;
     }).then((id)=>{
    Product.create({
        ProductName :productname,
        Categoryname:categoryname,
        CategoryId :id
    }).then(()=>{
        res.json({sucess:true,message:"Added to database"});
     }).catch(err=>{
        console.log(err);
     })
     }).catch(err=>{
        console.log(err);
     })
      };
      

      const items_per_page=5;
      
exports.getproducts = (req, res, next) => {
    const page= (+req.query.page || 1);
    let total_items;
    Product.findAndCountAll({
      offset:(page-1)*items_per_page,
      limit:items_per_page
    })
    .then(response=>{
      total_items=response.count;
      res.status(200).json({
        totalItems: total_items,
        hasNextPage: (page*items_per_page<total_items),
        hasPreviousPage: page>1,
        currentPage:page,
        nextPage:page+1,
        previousPage:page-1,
        lastPage:(Math.ceil(total_items/items_per_page)),
        products:response.rows
  
      })
    })
    .catch(err=>{
      console.log(err)
    })
  };
  