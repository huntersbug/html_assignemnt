import navbar from "../import/node.js"
document.getElementById("navbar").innerHTML=navbar()
let arr=JSON.parse(localStorage.getItem("signupdata"))||[]


document.getElementById("singupform").addEventListener("submit",signup)

function signup()
{
    event.preventDefault()
  let obj= { name:document.getElementById("username").value,
 password:document.getElementById("Password").value,
 email:document.getElementById("email").value,
}
arr.push(obj)
localStorage.setItem("signupdata",JSON.stringify(arr))

}