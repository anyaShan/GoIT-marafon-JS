// const myName = "hello word";
// console.log("hello");

// console.log(myName);
// console.dir(document);

// const title = document.querySelector(".cats-title");
// console.log(title);

// title.textContent = "Hello";
// title.style.color = "red";

// title.style.cssText = "color: green; font-size: 50px";

// title.classList.remove("cats-title");
//  console.log(object);

// const title = document.querySelector(".cats-title");

// const logotype = document.querySelector(".site-logo img");
// const body = document.querySelector("body");
// console.log(logotype);

// title.addEventListener("click", onLogoClick);

// function onLogoClick() {
//   logotype.classList.toggle("is-hidden");
// }
//-----------------------------

// const catPhoto = document.querySelector(".cat-photo");

// function onPhotoClick() {
//   catPhoto.src = "https://picsum.photos/200/300";
//   catPhoto.width = "296";
//   catPhoto.height = "370";
// }
// catPhoto.addEventListener("click", onPhotoClick);
// --------------------------------
const slider = document.querySelector(".hero-list");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const MySiema = new Siema({
  selector: slider,
  loop: true,
  duration: 600,
  easing: "ease-out",
  perPage: 1,
  draggable: true,
  multipleDrag: true,
});

function onNextClick() {
  MySiema.next();
}

function onPrevClick() {
  MySiema.prev();
}

next.addEventListener("click", onNextClick);
prev.addEventListener("click", onPrevClick);

// -----------img-----------------------------------

const lightbox = new SimpleLightbox(".gallery a", {
  /* options */
});

// ---------animation--------------------------------------

AOS.init();
