const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})
const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element) )


//Menu responsivo

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let menuMobileheader = document.querySelector('header');
    if (menuMobile.classList.contains('open')) {
        menuMobileheader.classList.remove("fund");
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imgs/menu_.svg";
    } else {
        menuMobile.classList.add('open');
        menuMobileheader.classList.add("fund");
        document.querySelector('.icon').src = "imgs/close_.svg";
    }
}

//Scroll cor e logo
window.addEventListener("scroll", function() {
    var menu = document.querySelector("header");
    var logo = document.querySelector(".logo");
    var nav = document.querySelector(".nav-bar");

    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        menu.classList.add("scrolled");
        logo.classList.add("scrolled");
        nav.classList.add("scrolled");
    } else {
        menu.classList.remove("scrolled");
        logo.classList.remove("scrolled");
        nav.classList.remove("scrolled");
    }
});

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

function mudaCor1(){
    var body = document.body;
    body.style.backgroundColor = '#072048';
}
function mudaCor2(){
    var body = document.body;
    body.style.backgroundColor = '#211813';
}
function mudaCor3(){
    var body = document.body;
    body.style.backgroundColor = '#756858';
}
function mudaCor4(){
    var body = document.body;
    body.style.backgroundColor = '#febe2c';
}
function mudaCor5(){
    var body = document.body;
    body.style.backgroundColor = '#a7a89f';
}
function mudaCor6(){
    var body = document.body;
    body.style.backgroundColor = '#643437';
}