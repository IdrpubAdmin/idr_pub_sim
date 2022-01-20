const taxOpen = document.querySelector('.tax-btn');
const cashOpen = document.querySelector('.cash-btn');

const taxCnts = document.querySelector('.tax');
const cashCnts = document.querySelector('.cash');

const closeBtn = document.querySelectorAll('.close');

closeBtn.forEach((targetClose) => {
    let cntsClose = document.querySelectorAll('.cnts-wrap');
    targetClose.addEventListener('click', () => {
        cntsClose.classList.remove('active');
    });
});

taxOpen.addEventListener('click', function(){
    if(taxCnts.classList.contains('active')){
        taxCnts.classList.remove('active');
    }else {
        taxCnts.classList.add('active');
    }
});

cashOpen.addEventListener('click', function(){
    if(cashCnts.classList.contains('active')){
        cashCnts.classList.remove('active');
    }else {
        cashCnts.classList.add('active');
    }
});