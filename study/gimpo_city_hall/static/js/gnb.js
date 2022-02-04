const dropDown = document.querySelectorAll('.lnb-item');

for(let i = 0; i < dropDown.length; i++){
    dropDown[i].addEventListener('mouseover', function(){
      showMenu = this.querySelector('.snb-wrap');
      showMenu.classList.add('active');
   });
   dropDown[i].addEventListener('mouseout', function(){
      hideMenu = this.querySelector('.snb-wrap');
      hideMenu.classList.remove('active');
   });
}

const mOpen = document.querySelector('.m-open');
const mClose = document.querySelector('.m-close');
const mWrap = document.querySelector('.mnb-wrap');
const mSlide = document.querySelector('.mnb');

mOpen.addEventListener('click', function(){
   mWrap.classList.add('m-active');
   mSlide.classList.add('m-slide');
});

mClose.addEventListener('click', function(){
   mWrap.classList.remove('m-active');
   mSlide.classList.remove('m-slide');
});

const mBtn = document.querySelectorAll('.drop');
const mDropDown = document.querySelectorAll('.mnb-item');

for(let j = 0; j < mBtn.length; j++){
   mBtn[j].addEventListener('click', function(e){
      for(let x = 0; x < mDropDown.length; x++){
         mDropDown[x].parentNode.classList.remove('active');
         e.target.classList.add('active');
      }
   });
}