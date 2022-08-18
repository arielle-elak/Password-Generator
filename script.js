// Assignment Code - have the button pay attention to the generate tag on the page
var generateBtn = document.querySelector("#generate");

var numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialArr = ["!", "@", "#", "%", "^", "&", "*"];
var pwLength = '';
var possArray = [];
// I STILL DO NOT UNDERSTAND HOW THIS EQUATES TO PASSWOR


// Write password to the #password input
function writePassword() {

  // Make the content found in #password the content of the passwordText variable
  var passwordText = document.querySelector("#password");
  // Make the value of passwordText equal the value of password, which also equals the result of the generatePassword function
  passwordText.value = password;

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
      console.log("Password length: " + pwLength);

  // If it's not between 8 and 128
    } else if ((userLength < 8 || userLength > 128)) {
      alert("Number is out of range.");
      userLength = '';
      console.log("Password length: Out of range");
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
      console.log("Password length: Invalid characters");
      writePassword ();
      }

    var numbers = confirm("Numbers: \nWould you like to use numbers (0-9)?");
    if (!numbers) {
      alert("Numbers will not be used in your password.");
      console.log("Numbers: " + numbers);
    } else {
      possArray = possArray.concat(numberArr);
      alert("Numbers will be used in your password.");
      console.log("Numbers: " + numbers);
    }

    var upperCase = confirm("UPPERCASE Characters: \nWould you like to use UPPERCASE characters (A-Z)?");
    if (!upperCase) {
      alert("UPPERCASE characters not be used in your password.");
      console.log("Uppercase: " + upperCase);
    } else {
      possArray = possArray.concat(upperArr);
      alert("UPPERCASE characters will be used in your password.");
      console.log("Uppercase: " + upperCase);
    }

    var lowerCase = confirm("Lowercase Characters: \nWould you like to use lowercase characters (a-z)?");
    if (!lowerCase) {
      alert("Lowercase characters will not be used in your password.")
      console.log("Lowercase: " + lowerCase);
    } else {
      possArray = possArray.concat(lowerArr);
      alert("Lowercase characters will be used in your password.")
      console.log("Lowercase: " + lowerCase);
    }

    var special = confirm("Special Characters: \nWould you like to use special characters (a-z)?");
    if (!special) {
      alert("Special characters will not be used in your password.")
      console.log("Special: " + special);
    } else {
      possArray = possArray.concat(specialArr);
      alert("Special characters will be used in your password.")
      console.log("Special: " + special);
    }

      console.log(possArray);
      console.log(password);
      passwordText = [];

      for (var i=0; i < pwLength; i++) {
        // This statement will run each time the loop is executed
        const character = possArray[Math.floor(Math.random() * possArray.length)];
        // Add a new character to the end of the passwordText array

        passwordText.push(character);

        }
        console.log(passwordText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
