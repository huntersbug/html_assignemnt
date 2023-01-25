// Ude Import export (MANDATORY)
import {navbar} from "../components/navbar.js"
let box=document.getElementById("container")
box.innerHTML=navbar()


let newsdata=JSON.parse(localStorage.getItem("news"))

newsdata.forEach(function(ele){
    console.log(ele)

    let box1=document.getElementById("container")
    let images=document.createElement("img")
    images.src=ele.urlToImage
    images.id="newsdivimage"
    let h4=document.createElement("h4")
    h4.innerHTML=ele.title
    let para=document.createElement("p")
    para.innerHTML=ele.description
    let div=document.createElement('div')
    let para1=document.createElement("p")
    para1.innerHTML=ele.content
    div.append(images,h4,para,para1)
    box1.append(div)
})