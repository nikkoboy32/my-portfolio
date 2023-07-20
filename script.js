const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", function () {
  const linksHeight = links.getBoundingClientRect().height;
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;

  console.log(linksContainerHeight);
  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

window.addEventListener("scroll", function () {
  const navHeight = nav.getBoundingClientRect().height;
  const position = window.pageYOffset;

  if (position > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
  linksContainer.style.height = 0;
});
