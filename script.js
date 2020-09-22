// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

prompt("How many characters do you want your password to be?(must be between 8 and 120")

prompt("Do you want your password to include lowercase letters?")

prompt("Do you want your password to include UPPERCASE letters?")

prompt("Do you want your password to contain numbers?")

prompt("Do you want your password to contain special characters?")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);