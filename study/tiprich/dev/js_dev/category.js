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

const cntbtn = document.querySelector('.cnt_btn');  
const cnlbtn = document.querySelector('.cnl_btn');  
const cnt = document.querySelector('.cnts');  
const cnl = document.querySelector('.cnl');  

cntbtn.addEventListener('click', () => {
    cnl.style.display = 'none';
    cnt.style.display = 'block';
    cnlbtn.classList.remove('hover');
    cntbtn.classList.add('hover');
});

cnlbtn.addEventListener('click', () => {
    cnt.style.display = 'none';
    cnl.style.display = 'flex';
    cntbtn.classList.remove('hover');
    cnlbtn.classList.add('hover');
});