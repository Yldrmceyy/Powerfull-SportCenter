"use strict";

//Selecting elements
const navbarEl=document.getElementById('navbar');
// Add scroll event listener
window.addEventListener('scroll',function () {
    if(window.scrollY > 50){
        navbarEl.classList.add('scrolled');
    }else{
        navbarEl.classList.remove('scrolled');
    }
  })