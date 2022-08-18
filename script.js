// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var symbolArr = ["!", "@", "#", "%", "^", "&", "*"];
var pwLength = '';

// Write password to the #password input
function writePassword() {

  // Function will run when the variable password is called
  var password = generatePassword();

  var generatePassword = function() {

  }

  let userLength = window.prompt("Please enter a number between 8 and 128 for the length of your password.");
    if ((typeof userLength === 'number') && (userLength >= 8) && (userLength <= 128)) {
      pwLength = userLength;
      alert("Your password will be " + pwLength + " in length.");
    } else if ((typeof userLength === 'number') && (userLength < 8) && (userLength > 128)) {
      alert("Number is out of range.");
      userLength = '';
      writePassword ();
    } else if ((isNaN(userLength)) &&
      (typeof userLength === 'symbol' ||
      typeof userLength === 'boolean' ||
      typeof userLength === 'undefined' ||
      typeof userLength === 'bigint' ||
      typeof userLength === 'function' ||
      typeof userLength === 'string')) {
      alert("Numbers only, please.");
      writePassword ();
    } else if ((typeof userLength === 'object') && (userLength === null)) {
      alert("Cancelled. Closing generator.")
      return;
    }

  // Execute the generate password function after writePassword is done
  var passwordText = document.querySelector("#password");

  // passwordText is a string that will eventually contain the final password
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
