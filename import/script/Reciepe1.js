import navbar from "../import/node.js"
document.getElementById("navbar").innerHTML=navbar()




let id;
let recipe=async ()=>{

    
try{
    let res=await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    let data= await res.json()
    let data1=data.meals
    console.log(data1)
appendata(data1)
return data1
}
catch(err){
console.log(err)
}
}
recipe()

let appendata=(data)=>
{
    let box=document.getElementById("box")
     data.forEach(({strMealThumb,idMeal,strMeal})=>{
        let images=document.createElement("img")
        images.src=strMealThumb
        let title=document.createElement("h3")
        title.innerHTML=`Title: ${strMeal}`
        let iditem=document.createElement("h3")
        iditem.innerHTML=`Mealid:${idMeal}`
       let box1=document.createElement("div")
        box1.append(images,title,iditem)
box.append(box1)

     })
  
 
}
//  let main= async ()=>
//  {
//      let data=await recipe()
  
//  appendata(data)
//  }

//  function debounce(func,delay)
//  {

//     if(id)
//     {
//         clearInterval(id);
//     }
   
   
//      id=setTimeout(function(){
//         main()
//      },delay)
//  }
//  debounce(main,3000)