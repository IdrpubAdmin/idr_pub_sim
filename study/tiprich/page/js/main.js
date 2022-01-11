const menuBtn = document.querySelector('.menubtn');
const menuDrop = document.querySelector('.menudrop');

menuBtn.addEventListener('click', () => {
    menuDrop.classList.toggle('active');
});

const login = document.querySelector('.login');