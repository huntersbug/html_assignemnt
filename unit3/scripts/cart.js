arrofcart=JSON.parse(localStorage.getItem("cartdata"))
console.log(arrofcart)
arrofcart.map(function(ele){
let container=document.getElementById("cart")

let images=document.createElement("img")
images.src=ele.image
let names=document.createElement("h1")
names.innerHTML=ele.name
let price =document.createElement("h1")
price.innerHTML=ele.price
let box=document.createElement("div")
let btn1=document.createElement("button")
btn1.innerHTML="Remove Product"
btn1.addEventListener("click",function(){
    removeitem(ele,length)
})
let btn2=document.createElement("button")
btn2.innerHTML="Checkout"
btn2.addEventListener("click",function(){
    check(ele)
})
box.append(images,names,price,btn1,btn2)
container.append(box)



})


function check(ele){
   let checkoutarr=JSON.parse(localStorage.getItem("check"))||[]
   checkoutarr.push(ele)
   localStorage.setItem("check",JSON.stringify(checkoutarr))
}

function removeitem(ele,index){
    console.log(ele,index)
    arrofcart.splice(index,1)
  localStorage.setItem("cartdata",JSON.stringify(arrofcart))
window.location.reload()
}