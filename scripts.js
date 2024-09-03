let sections = document. querySelectorAll('section');
let navlinks = document. querySelectorAll('header nav a');
window.onscroll = () => {
    let top = window.scrollY;
    let oofset = sec.offsettop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top >= oofset && top < oofset + height){
        navlinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a [hred*=' + id +']').classList.add('active');
        });
    };
};
    { let header = document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY>100);
};
let darkmodeicon =  document.querySelector('#darkmodeicon');
darkmodeicon.onclick = () => {
    darkmodeicon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};
ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
    });
    ScrollReveal().reveal('.home, .heading', { origin: top });
    ScrollReveal().reveal('.education .skills, .projects, .about', { origin: Left });