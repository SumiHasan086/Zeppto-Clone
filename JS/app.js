const menuBtn=document.querySelector(".mobile_menu");
const nav=document.querySelector("nav");

menuBtn.addEventListener("click",()=>{
    nav.classList.toggle("nav_active");
})