

const categorylist  = document.getElementById('forms');
const Select  = document.getElementById('select');

window.addEventListener('DOMContentLoaded',()=>{


axios.get(`http://localhost:3000/getAllcategory`).then(res=>{
     console.log(res);
    
   res.data.forEach(data=>{
   const option  = document.createElement('option');
   option.value  = `${data.category}`;
   option.innerText  = `${data.category}`;
   option.id  =  `${data.id}`;
   Select.append(option);
        
   })
   categorylist.appendChild(Select)

}).catch(err=>{
console.log(err);
})

})

//post category

categorylist.addEventListener('submit',(e)=>{
    e.preventDefault();
  
    const productname = document.getElementById('desc').value;
    const categoryname  = document.getElementById('select').value;
    const obj ={
   productname,
   categoryname
    }
    console.log(obj );
    console.log("line37s")
    axios.post(`http://localhost:3000/addproduct`,obj).then(res=>{

        console.log(res.data.message);
    alert(`${res.data.message}`);
    }).catch(err=>{
console.log(err);
    })
})



document.addEventListener('DOMContentLoaded',()=>{

    //display products along with pagination
    displayProducts();

})


function displayProducts(queryParams=''){
    axios.get(`http://localhost:3000/getproducts/${queryParams}`)
    .then(result=>{
        console.log("63")
        console.log(result);

        const productsDisplayContainerDiv=document.getElementById('products-content')
        productsDisplayContainerDiv.innerHTML='';
        result.data.products.forEach(product=>{
            const eachProduct=document.createElement('div');
            eachProduct.setAttribute('id',`p${product.id}`)
            eachProduct.innerHTML=`<h3>Product Name - ${product.ProductName}</h3>  <h3>Product id-${product.id}</h3> 
            <div> <p>Category -${product.Categoryname}</p></div>
            <div> <p>categoryid-${product.CategoryId}</p></div>
           
            <div>
            </div> 
            <br>`
            productsDisplayContainerDiv.appendChild(eachProduct)
        })
        
        pagination(result,document.getElementById('productPagination'),'products');
    })
    .catch(err=>{
        console.log(err)
    })

}
function pagination(response,container,place){
    let func;
    if(place=='cart')
    func='displayInCart'
    else if(place=='products')
    func='displayProducts'

    container.innerHTML=`
    <span>
        <button id="${place}firstPage" onclick="${func}('?page=1')">1</button>
        <button id="${place}previousPage" onclick="${func}('?page=${response.data.previousPage}')">${response.data.previousPage}</button>
        <button id="${place}currentPage" onclick="${func}('?page=${response.data.currentPage}')" class="active">${response.data.currentPage}</button>
        <button id="${place}nextPage" onclick="${func}('?page=${response.data.nextPage}')">${response.data.nextPage}</button>
        <button id="${place}lastPage" onclick="${func}('?page=${response.data.lastPage}')">${response.data.lastPage}</button>
    </span>
    `
    const firstPage=document.getElementById(`${place}firstPage`);
    const currentPage=document.getElementById(`${place}currentPage`);
    const previousPage=document.getElementById(`${place}previousPage`);
    const nextPage=document.getElementById(`${place}nextPage`);
    const lastPage=document.getElementById(`${place}lastPage`);
    if(parseInt(currentPage.innerText)==1)
    firstPage.style='display:none'
    if(parseInt(previousPage.innerText)<1 || parseInt(previousPage.innerText)==firstPage.innerText)
    previousPage.style='display:none'
    if(parseInt(nextPage.innerText)>parseInt(lastPage.innerText))
    nextPage.style='display:none'
    if(parseInt(currentPage.innerText)==parseInt(lastPage.innerText) || parseInt(nextPage.innerText)==parseInt(lastPage.innerText) )
    lastPage.style='display:none'


}

