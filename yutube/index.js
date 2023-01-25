//  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}&key=${key}`


 const key="AIzaSyAitdrrvV1WGq8uy2fPjsRJuyRvD_lYB44"



// src="https://www.youtube.com/embed/eMvGmIkmF7Y" 



const videocontent= async() => {

try{
const q=document.getElementById('showvideo').value
const res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${q}&key=${key}`)

    
    const data= await res.json();
    console.log(data.items)
    append(data.items)
}
catch(err){
console.log(err)
}
}

const append=(videos) =>{
    let box=document.getElementById("showcontent")
    box.innerHTML=null
    videos.forEach(({id:{videoId},snippet:{title}})=>{
let div=document.createElement("div")

let iframe=document.createElement("iframe")
iframe.src=`https://www.youtube.com/embed/${videoId}`
iframe.width="100%"
iframe.height="100%"
iframe.allow="fullscreen"
let name=document.createElement("h5")
name.innerHTML=title
div.append(iframe,name)

let data={
    title,
    videoId,
}
div.onclick=()=>{
videoscon(data)
}







box.append(div)
    })

    
}
const videoscon=(data)=>{
    window.location.href="video.html"
    localStorage.setItem("videosdata",JSON.stringify(data))
    
}
