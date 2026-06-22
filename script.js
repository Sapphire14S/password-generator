const passwordInput = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");
const generateBtn = document.getElementById("generate-btn");

const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("length-value");

const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

const strengthText = document.getElementById("strength-text");


// Character Sets
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";


// Update slider value
lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});


// Generate Password
generateBtn.addEventListener("click", () => {

  let characters = lowercase + uppercase;

  if (numbersCheckbox.checked) {
    characters += numbers;
  }

  if (symbolsCheckbox.checked) {
    characters += symbols;
  }

  let password = "";

  for (let i = 0; i < lengthSlider.value; i++) {

    const randomIndex = Math.floor(Math.random() * characters.length);

    password += characters[randomIndex];
  }

  passwordInput.value = password;

  checkStrength(password);
});


// Copy Password
copyBtn.addEventListener("click", () => {

  navigator.clipboard.writeText(passwordInput.value);

  copyBtn.textContent = "Copied!";

  setTimeout(() => {
    copyBtn.textContent = "Copy";
  }, 2000);
});


// Strength Checker
function checkStrength(password) {

  if (password.length < 6) {
    strengthText.textContent = "Weak";
    strengthText.style.color = "red";
  } else if (password.length < 10) {
    strengthText.textContent = "Medium";
    strengthText.style.color = "orange";
  } else {
    strengthText.textContent = "Strong";
    strengthText.style.color = "lightgreen";
  }
}
