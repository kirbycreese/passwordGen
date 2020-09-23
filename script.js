// Assignment Code
var generateBtn = document.querySelector("#generate");
// arrays
var lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] // filled with lowercase
var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] // filled with uppercase
var numberCharacters = ["1","2","3","4","5","6","7","8","9","0"]// filled with numbers
var specialCharacters = ["!","@","#","$","%","&","?"] // filled with special characters
var chosenArray = [];

var charLength = prompt("How many characters long would you like your password to be?");

if (charLength >= 8 && charLength < 120) {
  // TODO: The character length is within the bounds of our application
} else {
  alert("Please enter a number between 8 and 120")
}

var confirmLowerCase = confirm("Do you want your password to contain lowercase letters?"); //change to confirm
if (confirmLowerCase === "yes"){
chosenArray.push(lowercaseCharacters)
}else if (confirmLowerCase === "no"){

}

var confirmUpperCase = confirm("Do you want your password to contain uppercase letters?");
if (confirmUpperCase === "yes"){

}else if (confirmUpperCase === "no"){

}


var confirmNumbers = confirm("Do you want your password to contain numbers?");
if (confirmNumbers === "yes"){

}else if (confirmNumbers === "no"){

}else

var confirmSpecial = confirm("Do you want your password to contain special characters?");
if (confirmSpecial === "yes"){

}else if (confirmSpecial === "no"){
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword(){
      //use math.random function and use a loop to establish the number of times this function runs based on how many characters the user chose for the length of their password
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);