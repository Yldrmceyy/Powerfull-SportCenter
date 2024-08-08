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

      // Determine which content to show
      const targetId = this.getAttribute("data-target");

      // Hide all content sections
      document.querySelectorAll(".content").forEach((content) => {
        content.style.display = "none";
      });

      // Show the targeted content section
      document.getElementById(targetId).style.display = "flex";
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
    result.textContent = bmi + " -> Underweight";
    const range1 = (bmi - 10) * (100 / 45);  
    triangle.style.left = `${range1}%`;

  } else if (bmi >= 18.5 && bmi < 25) {
    result.textContent = bmi + " -> Normal";
    const range2 = ((bmi - 18.5) * (100 / 45)) + 20; 
    triangle.style.left = `${range2}%`;

  } else if (bmi >= 25 && bmi < 30) {
    result.textContent = bmi + " -> Overweight";
    const range3 = ((bmi - 25) * (100 / 45)) + 40;  
    triangle.style.left = `${range3}%`;

  } else if (bmi >= 30 && bmi < 35) {
    result.textContent = bmi + " -> Obese";
    const range4 = ((bmi - 30) * (100 / 45)) + 54;  
    triangle.style.left = `${range4}%`;

  } else {
    result.textContent = bmi + " -> Extremely Obese";
    const range5 = ((bmi - 35) * (100 / 45)) + 70;  
    triangle.style.left = `${range5}%`;
  }
}

// Adding event listeners to input fields
document.querySelector("#height").addEventListener("keyup", calculateBMI);
document.querySelector("#weight").addEventListener("keyup", calculateBMI);

//Hamburger Menu
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}
