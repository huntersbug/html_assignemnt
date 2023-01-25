// Store the wallet amount to your local storage with key "amount"
let arr=JSON.parse(localStorage.getItem("moneydata"))||[]
let sum=0
let arr1=JSON.parse(localStorage.getItem("money"))||[0]

let walletamt=document.getElementById("wallet")
var l=(arr1[arr1.length-1])
walletamt.innerHTML=l
  function addmoney()
  {
  //  sum=0
  let money=document.getElementById("amount").value

  arr.push(money)
  for(var i=0;i<arr.length;i++)
  {
    
sum=sum+Number(arr[i])

  }

  arr1.push(sum)

localStorage.setItem("moneydata",JSON.stringify(arr))
localStorage.setItem("money",JSON.stringify(arr1))
window.location.reload()
}