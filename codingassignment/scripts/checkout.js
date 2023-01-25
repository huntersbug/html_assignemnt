// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let arr1=JSON.parse(localStorage.getItem("money"))||[0]
  let arr2=JSON.parse(localStorage.getItem("checkout"))||[]
  let amt=document.getElementById("wallet")

  amt.innerHTML=arr1[arr1.length-1]
 arr2.forEach(function(ele){

let box=document.getElementById("movie")

  let title1=document.createElement('h2')
title1.innerHTML=`Title of movie: ${ele.Title}`
let poster=document.createElement("img")
poster.src=ele.Poster

let div=document.createElement("div")
div.append(poster,title1)

box.append(div)



 })
 function sucess(){
     let i=100
     let x=document.getElementById("number_of_seats").value
     
     if(amt.innerHTML>=i*x)
     {
         alert("sucessfully book Movies")
     }
     else{
         alert("not sufficeint balanced in wallet")
     }
 }