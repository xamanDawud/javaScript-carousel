let images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
];

let num = 0;
let imgId = document.getElementById("carouselId");
setInterval(() => {
  if (num === images.length) {
    num = 0;
  }
  let imgSource = images[num];
  imgId.setAttribute("src", imgSource);
  num++;
}, 1200);
