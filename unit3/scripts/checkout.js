var checkoutarr=JSON.parse(localStorage.getItem("check"))||[]


checkoutarr.map(function(ele){
    let container=document.getElementById("checking")
    
    let images=document.createElement("img")
    images.src=ele.image
    let names=document.createElement("h1")
    names.innerHTML=ele.name
    let price =document.createElement("h1")
    price.innerHTML=ele.price
    let box=document.createElement("div")
    box.append(images,names,price)
    container.append(box)
    var total=checkoutarr.reduce(function(sum,ele){
return sum+Number(ele.price)
    },0)
    
    let tot=document.getElementById("total")
tot.innerHTML=total
})