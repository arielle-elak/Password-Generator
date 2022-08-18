// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var symbolArr = ["!", "@", "#", "%", "^", "&", "*"];
var pwLength = '';
var pwArray = [];

  // Function will run when the variable password is called
var password = generatePassword();

function generatePassword() {
  const pw = pwArray.concat(symbolArr);
  console.log("Test2");
}

// Write password to the #password input
function writePassword() {

  var userLength = window.prompt("Password Length: \nPlease enter a number between 8 and 128.");

  // If user presses Cancel, close the window and end everything
  if (!userLength) {
      window.alert("Cancelled. Closing generator.")
      return;
  }

  // If user inputs something into the prompt
  // And it's a number between 8 and 128
  if (userLength >= 8 && userLength <= 128) {
      pwLength = userLength;
      alert("Your password will be " + pwLength + " characters in length.");

  // If it's not between 8 and 128
    } else if ((userLength < 8 || userLength > 128)) {
      alert("Number is out of range.");
      userLength = '';
      writePassword ();

  // If it's not a number and one of these other types (except for object since we want null to be possible for the cancel)
    } else if ((isNaN(userLength)) &&
      (typeof userLength === "symbol" ||
      typeof userLength === "boolean" ||
      typeof userLength === "undefined" ||
      typeof userLength === "bigint" ||
      typeof userLength === "function" ||
      typeof userLength === "string")) {
      alert("Numbers only, please.");
      writePassword ();
      }

      var numbers = confirm("Numbers: \nWould you like to use numbers (0-9)?");
      if (!numbers) {
        alert("Numbers will not be used in your password.")
      } else {
        pwArray = pwArray.concat(numberArr);
        alert("Numbers will be used in your password.")
      }
      console.log(pwArray);


  // Make the content found in #password the content of the passwordText variable
  var passwordText = document.querySelector("#password");

  // Make the value of passwordText equal the value of password, which also equals the result of the generatePassword function
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
