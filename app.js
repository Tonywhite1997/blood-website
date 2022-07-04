const slideOut = document.querySelector(".fa-xmark")
const headerNav = document.querySelector(".header__nav")
const slideIn = document.querySelector(".fa-bars")

slideOut.addEventListener("click", ()=>{
    headerNav.style.display = "none"
    slideIn.style.display = "initial"
    slideOut.style.display = "none"
})
slideIn.addEventListener("click", ()=>{
    headerNav.style.display = "flex"
    slideIn.style.display = "none"
    slideOut.style.display = "initial"
})
