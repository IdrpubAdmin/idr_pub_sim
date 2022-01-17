const menuBtn = document.querySelector('.menu_btn');
const menuDrop = document.querySelector('.menu_drop');

menuBtn.addEventListener('click', () => {
    menuDrop.classList.toggle('active');
});

const barsbtn = document.querySelector('.bars_btn');
const mnwrap = document.querySelector('.mn_wrap');

barsbtn.addEventListener('click', () => {
    mnwrap.classList.toggle('nav_drop');
});