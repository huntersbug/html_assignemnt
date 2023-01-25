function navbar(){
    return` <h3>
    <a href="./index.html">Homepage</a>
</h3>
<div id="container">

 <input oninput="debounce(main,1000)" type="text" id="search"  placeholder="search items"> 

  <h3><a href="./Reciepe1.html">DayReciepe</a></h3>
  <h3><a href="./Reciepe1.html">TrendingReciepe</a></h3>
  <h3><a href="./login.html">Login</a></h3>
  <h3><a href="./signup.html">Singup</a></h3>

</div>`
}
export default navbar