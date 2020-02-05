// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lowerCaseCharacters = false;
  var upperCaseCharacters = false;
  var numericCharacters = false;
  var specialCharacters = false; 
  var passwordLength = 0;
  while ((passwordLength < 8) || (passwordLength > 128)) {
    passwordLength = prompt("Password Length (8-128 Char)");
    console.log(passwordLength);   
  }

  var yn = prompt("Would you like to include Lower case characters (Y/N)");
  if (yn.toUpperCase() === "Y") {
    lowerCaseCharacters = true;
  }
  var yn = prompt("Would you like to include Upper case characters (Y/N)");
  if (yn.toUpperCase() === "Y") {
    upperCaseCharacters = true;
  }
  var yn = prompt("Would you like to include Numeric characters (Y/N)");
  if (yn.toUpperCase() === "Y") {
    numericCharacters = true;
  }
  var yn = prompt("Would you like to include Special characters (Y/N)");
  if (yn.toUpperCase() === "Y") {
    specialCharacters = true;
  }

  console.log("All Questions Asked")

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
