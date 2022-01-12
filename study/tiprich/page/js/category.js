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

const cntbtn = document.querySelector('.cntbtn');  
const cnlbtn = document.querySelector('.cnlbtn');  
const cnt = document.querySelector('.cnt');  
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