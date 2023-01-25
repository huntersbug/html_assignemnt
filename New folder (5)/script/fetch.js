let searchimages = async (API, q) => {
  try {
    let res = await fetch(
      `https://api.unsplash.com/search/photos/?query=${q}&per_page=20&order_by=&client_id=${API}`
    );
    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export { searchimages, appenddata };
//alt_description,urls:raw
//   function appenddata(){

//   }

let appenddata = (data, container) => {
  data.forEach(({ alt_description, urls: { small } }) => {
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerHTML = alt_description;
    let image = document.createElement("img");
    image.src = small;
    image.className = "imageid";
    div.append(image, h3);
    div.className = "divclass";
    container.append(div);
  });
};
