// Assignment Code

var charLength = prompt("How many characters long would you like your password?");

if (charLength > 8 && charLength < 120) {
  // TODO: The character length is within the bounds of our application
} else {
  alert("Please enter a number between 8 and 120");
}

var lowerCase = prompt("Do you want your password to contain lowercase letters?");
if (lowerCase === "yes"){

}else if (lowerCase === "no"){

}else {
    alert("Please type 'yes' or 'no'");
}

var upperCase = prompt("Do you want your password to contain uppercase letters?");
if (upperCase === "yes"){

}else if (upperCase === "no"){

}else {
    alert("Please type 'yes' or 'no'");
}


var numbers = prompt("Do you want your password to contain numbers?");
if (numbers === "yes"){

}else if (numbers === "no"){

}else {
    alert("Please type 'yes' or 'no'");
}

var specChar = prompt("Do you want your password to contain special characters?");
if (specChar === "yes"){

}else if (specChar === "no"){

}else {
    alert("Please type 'yes' or 'no'");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);