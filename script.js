// Assignment Code
// arrays
var lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] // filled with lowercase
var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] // filled with uppercase
var numberCharacters = ["1","2","3","4","5","6","7","8","9","0"]// filled with numbers
var specialCharacters = ["!","@","#","$","%","&","?"] // filled with special characters

var charLength = prompt("How many characters long would you like your password to be?");

if (charLength >= 8 && charLength < 120) {
  // TODO: The character length is within the bounds of our application
} else {
  alert("Please enter a number between 8 and 120");
}

var confirmLowerCase = prompt("Do you want your password to contain lowercase letters?");
if (confirmLowerCase === "yes"){

}else if (confirmLowerCase === "no"){

}else {
    alert("Please type 'yes' or 'no'");
}

var confirmUpperCase = prompt("Do you want your password to contain uppercase letters?");
if (confirmUpperCase === "yes"){

}else if (confirmUpperCase === "no"){

}else {
    alert("Please type 'yes' or 'no'");
}


var confirmNumbers = prompt("Do you want your password to contain numbers?");
if (confirmNumbers === "yes"){

}else if (confirmNumbers === "no"){

}else {
    alert("Please type 'yes' or 'no'");
}

var confirmSpecial = prompt("Do you want your password to contain special characters?");
if (confirmSpecial === "yes"){

}else if (confirmSpecial === "no"){

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