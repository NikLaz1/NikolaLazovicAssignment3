// Assignment Code
var generateBtn = document.querySelector("#generate");

var useLowerCaseCharacters = false;
var useUpperCaseCharacters = false;
var useNumericCharacters = false;
var useSpecialCharacters = false; 
var passwordLength = 0;

var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = "<>?,.!@#$%^&*()_+";

// Write password to the #password input
function writePassword() {

  while ((passwordLength < 8) || (passwordLength > 128)) {
    passwordLength = prompt("Password Length (8-128 Char)");
    console.log(passwordLength);   
  }

  var yn = prompt("Would you like to include Lower case characters (Y/N)");
  if (yn.toUpperCase() === "Y") {
    useLowerCaseCharacters = true;
  }
  var yn = prompt("Would you like to include Upper case characters (Y/N)");
  if (yn.toUpperCase() === "Y") {
    useUpperCaseCharacters = true;
  }
  var yn = prompt("Would you like to include Numeric characters (Y/N)");
  if (yn.toUpperCase() === "Y") {
    useNumericCharacters = true;
  }
  var yn = prompt("Would you like to include Special characters (Y/N)");
  if (yn.toUpperCase() === "Y") {
    useSpecialCharacters = true;
  }

  console.log("All Questions Asked")

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var password = "";
  var allowedCharacters = "";
  if (useLowerCaseCharacters == true) {
    allowedCharacters = allowedCharacters + lowerCaseCharacters;
  }
  if (useUpperCaseCharacters == true) {
    allowedCharacters = allowedCharacters + upperCaseCharacters;
  }
  if (useNumericCharacters == true) {
    allowedCharacters = allowedCharacters + numericCharacters;
  }
  if (useSpecialCharacters == true) {
    allowedCharacters = allowedCharacters + specialCharacters;
  }

  for (var i = 0; i < passwordLength ; i++) {
    var randomIdx = Math.random() * (allowedCharacters.length-1);
    randomIdx = Math.round(randomIdx);
    password = password + allowedCharacters[randomIdx];
  }

  return password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
