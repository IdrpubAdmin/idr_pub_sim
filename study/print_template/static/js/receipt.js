var openBtn = document.querySelectorAll('.btn-open');
var openClass;

for(let i = 0; i < openBtn.length; i++){
  openBtn[i].addEventListener('click', function(){
    openClass = this.getAttribute('name');
    document.querySelector('.' + openClass).classList.add('active');
  });
}

function toggleModal(target){
    document.querySelector(target).classList.remove('active');
}

function printBtn(){
    window.print();
}

// const taxOpen = document.querySelector('.tax-btn');
// const cashOpen = document.querySelector('.cash-btn');
// const taxCnts = document.querySelector('.tax');
// const cashCnts = document.querySelector('.cash');
// const closeBtn = document.querySelectorAll('.close');

// closeBtn.forEach((targetClose) => {
//     targetClose.addEventListener('click', () => {
//         taxCnts.classList.remove('active');
//         cashCnts.classList.remove('active');
//     });
// });

// taxOpen.addEventListener('click', function(){
//     if(taxCnts.classList.contains('active')){
//         taxCnts.classList.remove('active');
//     }else {
//         taxCnts.classList.add('active');
//     }
// });

// cashOpen.addEventListener('click', function(){
//     if(cashCnts.classList.contains('active')){
//         cashCnts.classList.remove('active');
//     }else {
//         cashCnts.classList.add('active');
//     }
// });
 
// const printBtn = document.querySelectorAll('.print-btn');

// printBtn.forEach((targetPrint) => {
//     targetPrint.addEventListener('click', () =>{
//         window.print();
//     });
// });

// const openB = document.querySelector('.open');
// const openA = document.querySelector('.cnts-wrap');

// openB.addEventListener('click', function(){
//     openA.classList.add('active');
// });



// var currentMenu;
// var menu = document.querySelector('.btns');

//  function ClickHandler(e){
//   if (currentMenu) {
//     classList.remove('active');
//      }
//      e.target.classList.add('active'); 
//     currentMenu = e.target;
//  }
 
//  menu.addEventListener('click',ClickHandler); 

// //tax-btn 버튼을 클릭하면 tax 모달창이 띄워진다(클래스 추가)
// //cash-btn 버튼을 클릭하면 cash 모달창이 띄워진다(클래스 추가)
// //close 버튼들을 누르면 모달창이 꺼진다(클래스 제거)
// //print 버튼들을 누르면 페이지가 인쇄된다

// const open = document.getElementsByClassName('open');
// const modal = document.getElementsByClassName('cnts-wrap');
// const modalLength = document.getElementsByClassName('cnts-wrap').length;

// for(let i = 0; i < open.length ; i++){
//     open.addEventListener('click', function(){
//         modal.classList.add('active');
//         console.log(modalLength);
//     });
// }