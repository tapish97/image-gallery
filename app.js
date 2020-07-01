const API_CLIENTID = 'PawPgRkxMZs3lJlY1-yHDaAsE333D85DFg_3t3pVno0'
const form = document.querySelector('form');
const input = document.querySelector('input');
const imageSection = document.querySelector('.images');
const API_URL = `https://api.unsplash.com/search/photos?page=1&per_page=20&client_id=${API_CLIENTID}`
const pictures = document.getElementById("photos");
window.load = displayImagesRan()

// display randm images 
function displayImagesRan() {
  let searchTerm = "random";

  searchStart();
  search(searchTerm)
    .then(displayImages)

}

// submit form


form.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
  event.preventDefault();
  let searchTerm = input.value;

  searchStart();
  search(searchTerm)
    .then(displayImages)
}

function searchStart() {
  imageSection.innerHTML = '';
}

function search(searchTerm) {
  let url = `${API_URL}&query=${searchTerm}`;
  return fetch(url)
    .then(response => response.json())
    .then(result => {
      return result.results;
    });
}



// display Images
function displayImages(images) {
  images.forEach(image => {
    let imageContainer = document.createElement('div');
    imageContainer.className = 'ImageResult'
    imageContainer.innerHTML = `<img src="${image.urls.regular}">
    <a href="${image.links.html}" target="_blank" class="view_link">View on Unsplash</a>`;

    imageSection.appendChild(imageContainer);

  });
}




// Grid list
let myElement = document.querySelector("#photos")


function List(){
  myElement.style.webkitColumnCount="1";
  myElement.style.width="40%";
  imageSection.style.display="inline-block";
}

function Grid(){
  myElement.style.webkitColumnCount="3";
  myElement.style.width="100%";
  imageSection.style.display="inline-block";
}