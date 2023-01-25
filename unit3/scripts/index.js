// Store cart items in local storage with key: "items"
let url="https://grocery-masai.herokuapp.com/items"

fetch(url)
.then(function(res){
    return res.json()
})
.then(function(res){
    //console.log(res)
    appenddata(res.data)
})
.catch(function(err){
    console.log(err)
})

function appenddata(data1){
    //console.log(ele)
    //console.log(data1)
    let container= document.getElementById("items")
 data1.map(function(ele){

 
   
    let images=document.createElement("img")
    images.src=ele.image
    images.id="imgid"
    let names=document.createElement("h2")
    names.innerHTML=ele.name
    let price=document.createElement("h3")
    price.innerHTML=ele.price
   

 let btn2=document.createElement("button")
btn2.innerHTML="add to cart"
btn2.addEventListener("click",function(){
    storedata(ele)
})
let div1=document.createElement("div")
div1.id="item"
div1.append(images,names,price,btn2)
container.append(div1)
})
}




function storedata(chart)
{


arr1=JSON.parse(localStorage.getItem("cartdata"))||[]

arr1.push(chart)

localStorage.setItem("cartdata",JSON.stringify(arr1))

}

let counting=document.getElementById("counter")
counting.innerHTML=arr1.length