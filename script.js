"use strict";

//Scrolled
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



//BMI Calculator

function calculateBMI(){
    //Selecting Elements
    let heightInput=parseInt(document.querySelector('#height').Value);
    let weightInput = parseInt(document.querySelector('#weight').Value);
    let result=document.querySelector('#result').value;
    result=(weightInput/((heightInput*heightInput)/10000)).toFixed(1);

    if ( result < 18.5) {
        document.querySelector('#result').textContent = "Zayıf : "+`${result}` ;
        
    } else if (result >= 18.5 && result < 24.9) {
      document.querySelector('#result').textContent = "Normal : "+`${result}` ;
        
    } else if (result >= 25 && result < 29.9) {
      document.querySelector('#result').textContent = "Fazla Kilolu : "+`${result}` ;
      

      } else if (result >= 30 && result < 39.9) {
        document.querySelector('#result').textContent = "Obez : "+`${result}`;
       
    } else {
      document.querySelector('#result').textContent = "Aşırı Obez :"+`${result}` ;
      
    };
}



