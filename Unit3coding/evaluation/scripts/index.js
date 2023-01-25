//store the products array in localstorage as "data"
document.querySelector("form").addEventListener("submit",product)

let  arr=JSON.parse(localStorage.getItem("productdata"))||[]
function product()
{
    event.preventDefault()
   
var formdata=document.getElementById("product_form")
var name=formdata.product_name.value
var brand=formdata.product_brand.value
var image=formdata.product_image.value
var price=formdata.product_price.value
var obj={
    productname:name,
    productbrand:brand,
    productimage:image,
    productprice:price,
}

arr.push(obj)
localStorage.setItem("productdata",JSON.stringify(arr))
location.reload()
}
