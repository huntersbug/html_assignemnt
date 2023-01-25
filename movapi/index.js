 


function moviesdata()
{
let search=document.getElementById("search").value
const url=`https://www.omdbapi.com/?apikey=9ff8f09c&t=${search}&plot=short`


fetch(url)
.then(function(res){
    return res.json()
})
.then(function(res){
    console.log(res)
    appenddata(res)
})
//---------------------------------------------------------print error
.catch(function(err){

console.log(err)

})
}
//------------------------------------------------------------- print error

function appenddata(ele)
{
    console.log(ele)
    let container=document.getElementById("container")
 //movdiv.innerHTML=null
 let nameofmov=document.createElement('h2')
nameofmov.innerHTML=`Title: ${ele.Title}`




 let date=document.createElement('h5')
 date.innerHTML=`Date: ${ele.Released}`
 let rating=document.createElement('h5')
 let x=ele.imdbRating
 var y=(Number(x))
 rating.innerHTML=`Imd Rating: ${x}`
 console.log(typeof(y))

 let imgofmov=document.createElement('img')
 imgofmov.src=ele.Poster
 imgofmov.style.width="150px"
 imgofmov.style.height="150px"
 let movdiv=document.createElement("div")
 movdiv.append(imgofmov,nameofmov,date,rating)
 container.append(movdiv)

 let rath;
 if(Number(y)>=8.5)
{
    rath=document.createElement("h4")
    rath.innerHTML="Recommended"
  
 rath.className="class1"
    movdiv.append(rath)
}

}



