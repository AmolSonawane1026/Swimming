
const Hamburger = document.getElementById("hamburger");
const NavMenu = document.getElementById("nav-ul");
const NavItem = document.querySelectorAll(".nav-li")

Hamburger.addEventListener("click",()=>{
    NavMenu.classList.toggle("active");
})

NavItem.forEach(n=> n.addEventListener("click",()=>{
    NavMenu.classList.toggle("active");
}))