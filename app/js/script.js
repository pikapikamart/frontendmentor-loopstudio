
const getElement = query => document.querySelector(query);

const navbarToggle = getElement(".js-menu-toggle");

const handleDropdownState = () =>{
  const ariaExpanded = navbarToggle.getAttribute("aria-expanded");
  
  if ( ariaExpanded=="false") {
    navbarToggle.setAttribute("aria-expanded", "true");
  } else {
    navbarToggle.setAttribute("aria-expanded", "false");
  }
}

navbarToggle.addEventListener("click", handleDropdownState);
