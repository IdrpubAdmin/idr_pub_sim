"use strict";

var menuBtn = document.querySelector('.menu_btn');
var menuDrop = document.querySelector('.menu_drop');
menuBtn.addEventListener('click', function () {
  menuDrop.classList.toggle('active');
});
var barsbtn = document.querySelector('.bars_btn');
var mnwrap = document.querySelector('.mn_wrap');
barsbtn.addEventListener('click', function () {
  mnwrap.classList.toggle('nav_drop');
});