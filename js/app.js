var header = document.querySelector(".header");


window.onscroll = function() {headerFunction()}


function headerFunction() {
    if (window.pageYOffset > 80) {
      header.classList.add("sticky-first");
    } else {
      header.classList.remove("sticky-first");
    }
     if (window.pageYOffset > 100) {
        header.classList.add("sticky-second");
      } else {
        header.classList.remove("sticky-second");
      }
}


const mobileMenu = document.querySelector(".mobile-menu").style
const menuBtn = document.querySelector(".fa-bars")
var x = false

menuBtn.addEventListener("click",()=>{
  toggle()
})

const toggle=()=>{
  if(x===false){
    mobileMenu.height="auto"
    mobileMenu.visibility = "visible"
    mobileMenu.opacity="1"
    x=true
  }else{
    mobileMenu.height="0"
    mobileMenu.visibility = "hidden"
    mobileMenu.opacity="0"
    x=false
  }
}