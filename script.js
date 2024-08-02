"use strict";

//Scrolled
//Selecting elements
const navbarEl = document.getElementById("navbar");
// Add scroll event listener
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbarEl.classList.add("scrolled");
  } else {
    navbarEl.classList.remove("scrolled");
  }
});

//BMI Calculator

function calculateBMI() {
  //Selecting Elements
  let heightInput = parseInt(document.querySelector("#height").value);
  let weightInput = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector("#result").value;

  // Checking if inputs are valid numbers
  if (isNaN(heightInput) || isNaN(weightInput)) {
    result.textContent = "Please enter valid numbers.";
    return;
  }

  // Calculating BMI
  let bmi = (weightInput / ((heightInput * heightInput) / 10000)).toFixed(1);

  if (bmi < 18.5) {

    document.querySelector("#result").textContent = "Zayıf : " + `${result}`;
  } else if (bmi >= 18.5 && bmi < 24.9) {

    document.querySelector("#result").textContent = "Normal : " + `${result}`;
  } else if (bmi >= 25 && bmi < 29.9) {

    document.querySelector("#result").textContent =
      "Fazla Kilolu : " + `${result}`;

  } else if (bmi >= 30 && bmi < 39.9) {
    document.querySelector("#result").textContent = "Obez : " + `${result}`;
  } else {

    document.querySelector("#result").textContent =
      "Aşırı Obez :" + `${result}`;
  }
}

// Adding event listeners to input fields
document.querySelector('#height').addEventListener('keyup', calculateBMI);
document.querySelector('#weight').addEventListener('keyup', calculateBMI);