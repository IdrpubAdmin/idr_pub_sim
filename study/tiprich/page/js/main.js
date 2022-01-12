const menuBtn = document.querySelector('.menubtn');
const menuDrop = document.querySelector('.menudrop');

menuBtn.addEventListener('click', () => {
    menuDrop.classList.toggle('active');
});

const barsbtn = document.querySelector('.barsbtn');
const mnwrap = document.querySelector('.mnwrap');

barsbtn.addEventListener('click', () => {
    mnwrap.classList.toggle('navdrop');
});