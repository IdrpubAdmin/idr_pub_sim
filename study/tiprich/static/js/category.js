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
var cntbtn = document.querySelector('.cnt_btn');
var cnlbtn = document.querySelector('.cnl_btn');
var cnt = document.querySelector('.cnts');
var cnl = document.querySelector('.cnl');
cntbtn.addEventListener('click', function () {
  cnl.style.display = 'none';
  cnt.style.display = 'block';
  cnlbtn.classList.remove('hover');
  cntbtn.classList.add('hover');
});
cnlbtn.addEventListener('click', function () {
  cnt.style.display = 'none';
  cnl.style.display = 'flex';
  cntbtn.classList.remove('hover');
  cnlbtn.classList.add('hover');
});