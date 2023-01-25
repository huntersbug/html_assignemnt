import {navbar} from "../components/navbar.js";
let box=document.getElementById("navbar")
box.innerHTML=navbar()
import { searchimages,appenddata } from "./fetch.js";
//----------------------------IMPORT  EXPORT DONE---------------------------------------------------------------------------
const API="jJkzQ_yqkA2DW5T7-QvV0IUTnK_PV0GNrmK_qVyE5EI"
    let search=(l)=>{
      if(l.key==="Enter"){
        let q=document.getElementById("query").value
        let container=document.getElementById('container')
       searchimages(API,q).then((data)=>{
         let container=document.getElementById("container")
         container.innerHTML=null
      appenddata(data.results,container)
    console.log(data)
        })
        }
    }
    document.getElementById("query").addEventListener("keydown",search)
let categories=document.getElementById("category").children
for(let el of categories)
{
 el.addEventListener("click",csearch)
}
function csearch()
{
    searchimages(API,this.id).then((data)=>{
        let container=document.getElementById("container")
        container.innerHTML=null
     appenddata(data.results,container)
   console.log(data)
       })
       }

  