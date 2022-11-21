const header = document.querySelector("header");
const heroSection = document.querySelector(".hero");
const links = document.querySelectorAll("header nav ul li");
const nav = document.querySelector("header nav ul");
const openNav = document.querySelector("header .hamburger");
const closeNav = document.querySelector("header .close");

// add style to header and change color to mobile navigation when scrolling

window.addEventListener("scroll", fixedNavigationStyle);

function fixedNavigationStyle() {
  const heroHeight = heroSection.clientHeight;
  if (scrollY >= heroHeight / 3) {
    header.classList.add("fixed");
    nav.style.backgroundColor = "white";
  } else {
    header.classList.remove("fixed");
    nav.style.backgroundColor = "#272524";
  }
}

// change active link
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});

// show and hide phone nav menu

openNav.addEventListener("click", () => {
  showmobileNav();
  changeMobileNavIcone();
});
closeNav.addEventListener("click", () => {
  hidemobileNav();
  changeMobileNavIcone();
});

function showmobileNav() {
  nav.classList.add("show");
  if (header.classList.contains("fixed")) {
    nav.style.cssText = "top: 120%; background-color: white;";
  } else {
    nav.style.cssText = "top: 100%; background-color: #272524";
  }
}

function hidemobileNav() {
  nav.classList.remove("show");
}

function changeMobileNavIcone() {
  if (nav.classList.contains("show")) {
    openNav.style.display = "none";
    closeNav.style.display = "block";
  } else {
    openNav.style.display = "block";
    closeNav.style.display = "none";
  }
}
