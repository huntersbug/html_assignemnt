// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let box=document.getElementById("container")
let id;
let arr2=[]
let box1=document.getElementById("movies")
  //let url=`https://www.omdbapi.com/?apikey=9ff8f09c&t=${query}&plot=short`
  let arr1=JSON.parse(localStorage.getItem("money"))||[0]
  let amt=document.getElementById("wallet")

  amt.innerHTML=arr1[arr1.length-1]

  let searchmovies= async()=>{
    let query=document.getElementById("search").value
    try{
      let res= await fetch(`https://www.omdbapi.com/?apikey=9ff8f09c&t=${query}&plot=short`)
  let data=await res.json()
  return data
    }
catch(err){
console.log(err)
}
  



  }
  function appenddata(ele)
  {
    console.log(ele)
    // data.forEach(function(ele){
   let title=document.createElement("h2")
   title.innerHTML=ele.Title
   box.append(title)
// })
let title1=document.createElement('h2')
title1.innerHTML=`Title of movie: ${ele.Title}`
let poster=document.createElement("img")
poster.src=ele.Poster
let relased=document.createElement("h3")
relased.innerHTML=`Rating: ${ele.imdbRating}`
let div=document.createElement("div")
let btn=document.createElement("button")
btn.innerHTML="Book now"
btn.className="book_now"
btn.addEventListener("click",function(){
  checkout(ele)
})
div.append(poster,title,relased,btn)
box1.append(div)
  }

  function checkout(ele){
    arr2.push(ele)
arr2=localStorage.setItem("checkout",JSON.stringify(arr2))
window.location.href="./checkout.html"
}
let join=async ()=>{
  let data=await searchmovies()
    if(data.Title==undefined)
    {
      return false
    }
appenddata(data)
  }
function debonce(func,delay){
  if(id){
    clearInterval(id)
  }
  setTimeout(function(){
func()
  },delay)
}