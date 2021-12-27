let backgroundImg = [
  "./img/cod.jpg",
  "./img/cyper_punk.jpg",
  "./img/zero_dawn1.jpg",
  "./img/cyber_girl.jpg",
];

let heading = document.querySelector("section#heading");
var imgIndex = 0;

function autoChangeImage() {
  heading.style.backgroundImage = `url(${backgroundImg[imgIndex]})`;
  imgIndex++;
  if (imgIndex >= backgroundImg.length) {
    imgIndex = 0;
  }
}

setInterval(autoChangeImage, 3000);

// Transparency when scroll
let navBar = document.querySelector(".navbar__container");
window.addEventListener("scroll", function (e) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navBar.style.backgroundColor = " var(--background-color)";
  } else {
    navBar.style.backgroundColor = "transparent";
  }
});
