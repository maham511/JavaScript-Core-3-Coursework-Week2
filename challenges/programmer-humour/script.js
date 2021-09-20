//store img
let img = document.getElementById("img");

//fetch function logs received data & renders img 
function fetchImg() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      img.src = data.img;
    })
    //logs if an error occurs
    .catch((err) => console.log(err));
}

fetchImg();
