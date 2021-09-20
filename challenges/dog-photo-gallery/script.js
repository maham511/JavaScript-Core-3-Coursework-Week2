//ul & btn elems stored
let ul = document.getElementById("ul");
let button = document.getElementById("btn");

//eventlistener callback fetches api, then logs and creates li & img element
function fetchDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then((greeting) => {
      console.log(greeting);
      let li = document.createElement("li");
      let img = document.createElement("img");
      ul.appendChild(li);
      li.append(img);
      img.src = greeting.message;
      img.width = 200;
    });
}

//onclick button adds random dog img to page
button.addEventListener("click", fetchDog);
