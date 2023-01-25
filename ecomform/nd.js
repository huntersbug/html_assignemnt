let arr=JSON.parse(localStorage.getItem("productData"))||[]

    function storeproduct(event){
  
        event.preventDefault()
let form=document.getElementById("product")
let name=form.productname.value
let brand=form.productbrand.value
let category=form.category.value
let image=form.image.value
let price=form.price.value
let gender=form.gender.value
let sold=form.sold.value
let p1=new productdetail(name,brand,category,image,price,gender,sold)
arr.push(p1)
console.log("arr",arr)

localStorage.setItem("productData",JSON.stringify(arr))
}
function productdetail(name,brand,category,image,price,gender,sold){
this.name=name
this.brand=brand
this.category=category
this.image=image
this.price=price
this.gender=gender

this.sold=sold


}