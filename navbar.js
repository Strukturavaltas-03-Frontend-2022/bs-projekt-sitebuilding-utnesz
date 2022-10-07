'use strict'

const navbar = document.querySelector(".navbar");
const navBrand = document.querySelector(".navbar .navbar-brand");
const navItem = document.querySelectorAll(".navbar-nav .nav-item");
const navbarToggler = document.querySelector(".navbar-toggler");
const fixNavBar = document.querySelector(".fixNavBar")
const navLink = document.querySelector(".nav-link")

window.addEventListener("scroll", () => {
    if (window.scrollY !== 0) {
        navbar.style.backgroundColor = "white";
        fixNavBar.style.backgroundColor = "white";
        navBrand.style.color = "black";
        navbarToggler.style.color = "black";
        navbarToggler.style.borderColor = "black";


        navBrand.addEventListener("mouseover", () => {
            navBrand.style.color = "#fec947";
        });

        navBrand.addEventListener("mouseleave", () => {
            navBrand.style.color = "black";
        });
    } else {
        navbar.style.backgroundColor = "rgba(0,0,0,0)";
        fixNavBar.style.backgroundColor = "rgba(0,0,0,0)";
        navBrand.style.color = "#fec947";
        navbarToggler.style.color = "rgba(209, 197, 207)";
        navbarToggler.style.borderColor = "rgba(209, 197, 207)";
 
        
        navBrand.addEventListener("mouseover", () => {
            navBrand.style.color = "white";
        });

        navBrand.addEventListener("mouseleave", () => {
            navBrand.style.color = "#fec947";
        });

    }
});


