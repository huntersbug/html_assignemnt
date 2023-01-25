import navbar from "../import/node.js"
document.getElementById("navbar").innerHTML=navbar()
document.getElementById("login"),addEventListener("submit",loginfun)











let loginarr=JSON.parse(localStorage.getItem("signupdata"))
function loginfun()
{
    let form=document.getElementById("login")
    event.preventDefault()

    let useremail=document.getElementById("email").value
    let pass=document.getElementById("Password").value

    let loginarr=JSON.parse(localStorage.getItem("signupdata"))
    for(var i=0;i<loginarr.length;i++)
    {
    if(useremail===loginarr[i].email&&pass===loginarr[i].password)
    {
        alert("login sucessfull")
        window.location.href="./index.html"
        break
    }
    else
    {
        alert("login unsucessfull")
        break
    }

    }

  

}

