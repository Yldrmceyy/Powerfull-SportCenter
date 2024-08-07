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

//Our-Classes-Buttons
//Selecting Elements
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("btn-active"));
      this.classList.add("btn-active");
      // Hangi içeriğin gösterileceğini belirle
      const targetId = this.getAttribute("data-target");

      // Tüm içerikleri gizle
      document.querySelectorAll(".content").forEach((content) => {
        content.style.display = "none";
      });

      // Belirtilen içeriği göster
      document.getElementById(targetId).style.display = "block";
    });
  });
});

// BMI Calculator

function calculateBMI() {
  // Selecting Elements
  let heightInput = parseInt(document.querySelector("#height").value);
  let weightInput = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector("#result");
  const triangle = document.querySelector(".triangle");

  // Checking if inputs are valid numbers
  if (isNaN(heightInput) || isNaN(weightInput)) {
    result.textContent = "Please enter valid numbers.";
    return;
  }

  // Calculating BMI
  let bmi = (weightInput / ((heightInput * heightInput) / 10000)).toFixed(1);

  // Displaying Result
  if (bmi < 18.5) {
    result.textContent = bmi + "-> Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    result.textContent = bmi + "-> Normal";
  } else if (bmi >= 25 && bmi < 29.9) {
    result.textContent = bmi + "-> Overweight";
  } else if (bmi >= 30 && bmi < 39.9) {
    result.textContent = bmi + "-> Obese";
  } else {
    result.textContent = bmi + "->Extremely Obese";
  }
}

// Adding event listeners to input fields
document.querySelector("#height").addEventListener("keyup", calculateBMI);
document.querySelector("#weight").addEventListener("keyup", calculateBMI);
