// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar} from "../components/navbar.js"
let box=document.getElementById("container")
box.innerHTML=navbar()
import{searchnews,appendnews} from "../scripts/fetch.js"



let enterfun=(el)=>{
if(el.key==="Enter")

{
    let q=document.getElementById("search_input").value
searchnews(q).then((data)=>{
console.log(data)
appendnews(data.articles)
})

}
}
let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=in"
 let news= async ()=>{
    
     try{
         let res= await fetch ("https://masai-mock-api.herokuapp.com/news/top-headlines?country=in")
         let data=await res.json()
         console.log(data)
let box1=document.getElementById("news")
box1.innerHTML=null
         appendnews(data.articles)
    }
     catch(err){
 console.log(err)
     }

 }
 news()
let child=document.getElementById("sidebar").children

    for(let el of child)
    {
        el.addEventListener("click",searchsidebar)
    }
 function searchsidebar(){
   let q= this.id
     searchnews(q).then((data)=>{
        console.log(data)
      let box1=document.getElementById("news")
      box1.innerHTML=null

        appendnews(data.articles)

         })
    // console.log(this.id)
 }
document.getElementById("search_input").addEventListener("keydown",enterfun)