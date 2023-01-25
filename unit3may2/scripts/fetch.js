let searchnews= async (q)=>{

    try{
        let res= await fetch (`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${q}`)
  
        let data=await res.json()
        return data
    }
    catch(err){
console.log(err)
    }

}



export {searchnews,appendnews} 
let appendnews=(data)=>{

    data.forEach((ele)=>{
  
        let box1=document.getElementById("news")
        let images=document.createElement("img")
        images.src=ele.urlToImage
        let h4=document.createElement("h4")
        h4.innerHTML=ele.title
        let para=document.createElement("p")
        para.innerHTML=ele.description
        let div=document.createElement('div')
        div.append(images,h4,para)
        div.addEventListener('click',function(){
         funlocal(ele)
        })
        box1.append(div)
        images.className='newsimage'
       
    })
}
let arr1=[]
function funlocal(data){
    arr1.push(data)
    localStorage.setItem("news",JSON.stringify(arr1))
   window.location.href='../news.html'
}
