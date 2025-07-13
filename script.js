const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.screenY>100);

    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

 ScrollReveal({
    reset: true ,
    distance: '80px',
    duration:2000,
    delay:200
 });

 ScrollReveal().reveal('.home-content, .heading', {origin: 'top' });
 ScrollReveal().reveal('.home-img, .skills-container, .education-box, .project-card, .contact form', {origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left' });
 ScrollReveal().reveal('.about-contnt', {origin: 'right' });

 const typed = new Typed('.multiple-text', {
    strings: ['Web Developer','Mobile Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
 })