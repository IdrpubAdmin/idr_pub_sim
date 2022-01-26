const dropDown = document.querySelectorAll('.lnb-item');

for(let i = 0; i < dropDown.length; i++){
    dropDown[i].addEventListener('mouseover', function(){
      showMenu = this.querySelector('.snb');
      showMenu.classList.add('active');
   });
   dropDown[i].addEventListener('mouseout', function(){
      hideMenu = this.querySelector('.snb');
      hideMenu.classList.remove('active');
   });
}