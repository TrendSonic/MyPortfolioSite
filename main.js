//make hamburger menu works
const mobileBtn = document.getElementById("mobile-menu");
const nav = document.querySelector("nav");
const mobileExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener('click', () =>  {
    nav.classList.add("nav-toggle");
})

mobileExit.addEventListener('click', () =>  {
    nav.classList.remove("nav-toggle");
})


//navbar fixed
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    nav.classList.remove("nav-toggle");

})

var scroll = new SmoothScroll('a[href*="#"]',{
    header: '[data-scroll-header]'
    
});
    





//make send message btn working



//make few animations



//add projects to projects section and make it able to show somehow