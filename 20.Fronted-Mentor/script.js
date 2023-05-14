const menu_icon = document.querySelector(".menu_icon");
const navBar = document.querySelector("nav");
const header = document.querySelector("#header-section");
const headerInfo = document.querySelector(".header-info");
const links = document.querySelectorAll(".footer-link");

let mediaQuery=window.matchMedia("(max-width: 1023px)")

if (mediaQuery.matches) {
  console.log("havagi");
  menu_icon.addEventListener("click", () => {
    navBar.classList.remove("nav-menu");
    navBar.classList.toggle("header-menu");
    header.classList.toggle("header-section");
    if (navBar.classList.contains("header-menu")) {
      navBar.style.display = "block";
      headerInfo.style.display = "none";
    } else {
      headerInfo.style.display = "block";
      navBar.style.display = "none";
    }
  });
} else {
  console.log("hi");
  navBar.style.display = "block";
  navBar.className = "nav-menu";
}

links.forEach((link) =>
  link.addEventListener("click", () => {
    document.location = "#header-section";
  })
);
