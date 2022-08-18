// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var symbolArr = ["!", "@", "#", "%", "^", "&", "*"];

// Write password to the #password input
function writePassword() {

  // I assume these expressions are here to define
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // passwordText is a string that will eventually contain the final password
  passwordText.value = password;

}

// Function to actually execute the generator
function generatePassword() {
  console.log("test");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
