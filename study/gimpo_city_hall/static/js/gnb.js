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