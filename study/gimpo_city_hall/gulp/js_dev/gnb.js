// GNB 메뉴

const dropDown = document.querySelectorAll('.lnb-item');

for (let i = 0; i < dropDown.length; i++) {
   dropDown[i].addEventListener('mouseover', function () {
      showMenu = this.querySelector('.snb-wrap');
      showMenu.classList.add('active');
   });
   dropDown[i].addEventListener('mouseout', function () {
      hideMenu = this.querySelector('.snb-wrap');
      hideMenu.classList.remove('active');
   });
}

// 모바일 햄버거버튼

const mOpen = document.querySelector('.m-open');
const mClose = document.querySelector('.m-close');
const mWrap = document.querySelector('.mnb-wrap');
const mSlide = document.querySelector('.mnb');

mOpen.addEventListener('click', function () {
   mWrap.classList.add('m-active');
   mSlide.classList.add('m-slide');
   document.body.classList.add('scroll-lock');
});

mClose.addEventListener('click', function () {
   mWrap.classList.remove('m-active');
   mSlide.classList.remove('m-slide');
   document.body.classList.remove('scroll-lock');
});

// 모바일 아코디언 

const mBtn = document.querySelectorAll('.drop');
const mDropDown = document.querySelectorAll('.mnb-item');

for (let i = 0; i < mBtn.length; i++) {
   mBtn[i].addEventListener('click', function (e) {
      for (let x = 0; x < mDropDown.length; x++) {
         if(getComputedStyle(e.target).height == '50px'){
            mDropDown[x].parentNode.classList.remove('active');
            e.target.classList.add('active');     
         } else{
            e.target.classList.remove('active');   
         }
      }
   });
}

// 팝업닫기

const popupBtn = document.querySelector('.popup-close');
const popupClose = document.querySelector('.popup-wrap');

popupBtn.addEventListener('click', function(){
   popupClose.classList.add('active');
});