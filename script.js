function el(e) {
    return document.querySelector(e);
}


const navbarTogglers = document.querySelectorAll("[data-toggle=navbar]");
const navbar = el("#navbar");

navbarTogglers.forEach(toggler =>{
    toggler.addEventListener("click", ()=>{
        navbar.classList.toggle("show-nav");
    });
})