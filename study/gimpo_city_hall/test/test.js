const dropDown = document.querySelectorAll('.drop');

for(let i = 0; i < dropDown.length; i++){
    dropDown[i].addEventListener('mouseover', function(){
      showMenu = this.querySelector('.depth');
      showMenu.classList.add('active');
   });
   dropDown[i].addEventListener('mouseout', function(){
      hideMenu = this.querySelector('.depth');
      hideMenu.classList.remove('active');
   });
}