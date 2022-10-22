// Password Generator
// Last updated by Arielle Schlickman Elak Aug 18 2022

/* ----------------------
//MAIN ISSUE
If the window captures anything before the initial cancel is hit, it will skip all possibilities and go on to the next phase without retrieving a length
*/


// Assignment Code
//The id of the button in HTML is "generate"
// The listener at the bottom will watch for activity in the button#generate zone
var generateBtn = document.querySelector("#generate");

// Global variables that will change depending upon the user's input
var pwLength = 0;
var numbers = true;
var upper = true;
var lower = true;
var special = true;

// All possible characters in arrays
var arrSpecial = ["!","@","#","$","%","^","?"],
arrNumbers = [0,1,2,3,4,5,6,7,8,9],
arrUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
arrLowercase = ["a","b","b","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// This will be the array container for the specified range of characters based on true/false statements to be randomly selected from
var generatorCharacters = []

// The array in which the final password characters will be stored before being turned into a string
var arrPassword = [];

// When the button is clicked, it will call the funciton writePassword
function writePassword() {
  // Reset any old data when button is pressed again.
  // Clears for the next round
  generatorCharacters = [];
  arrPassword = [];
  passwordText = [];
  pwLength = '';
  userLength = false;

   // This will watch for when the var passwordText has a value assigned
  // And to link it to the area on the page that has the password id
  var passwordText = document.querySelector("#password");

// Data collected from prompt window
  var userLength = window.prompt("Password Length: \nPlease enter a number between 8 and 128.");
  // If user presses Cancel, close the window and end everything
  debugger

  // IS it type? variable value?
  /**
   *
   *
   * 
   */
  if (!userLength) {
    window.alert("Cancelled. Closing generator.");
    userLength = null;
    console.log("Cancelled " + userLength);
    return;

  } else if (userLength >= 8 && userLength <= 128) {
    pwLength = userLength;
    alert("Your password will be " + pwLength + " characters in length.");
    console.log("Password length: " + pwLength);

// If it's not between 8 and 128
  } else if ((userLength < 8 || userLength > 128)) {
    alert("Number is out of range.");
    console.log("Password length: Number of range");
    userLength = null;
    writePassword();

// If it's not a number and one of these other types (except for object since we want null to be possible for the cancel)
  } else if ((isNaN(userLength)) ||
    typeof userLength === "symbol" ||
    typeof userLength === "boolean" ||
    typeof userLength === "undefined" ||
    typeof userLength === "bigint" ||
    typeof userLength === "function" ||
    typeof userLength === "string") {
    alert("Numbers only, please.");
    console.log("Password length: Invalid characters");
    console.log(userLength + " for the isNan");
    writePassword();

  } else {
    console.log("Something else happened...")
    userLength = null;
    return;
  }

  var numbers = confirm("Numbers: \nWould you like to use numbers (0-9)?");
  if (!numbers) {
    alert("Numbers will not be used in your password.");
    console.log("Numbers: " + numbers);
  } else {
    generatorCharacters = generatorCharacters.concat(arrNumbers);
    alert("Numbers will be used in your password.");
    console.log("Numbers: " + numbers);
  }

  var upperCase = confirm("UPPERCASE Characters: \nWould you like to use UPPERCASE characters (A-Z)?");
  if (!upperCase) {
    alert("UPPERCASE characters not be used in your password.");
    console.log("Uppercase: " + upperCase);
  } else {
    generatorCharacters = generatorCharacters.concat(arrUppercase);
    alert("UPPERCASE characters will be used in your password.");
    console.log("Uppercase: " + upperCase);
  }

  var lowerCase = confirm("Lowercase Characters: \nWould you like to use lowercase characters (a-z)?");
  if (!lowerCase) {
    alert("Lowercase characters will not be used in your password.")
    console.log("Lowercase: " + lowerCase);
  } else {
    generatorCharacters = generatorCharacters.concat(arrLowercase);
    alert("Lowercase characters will be used in your password.")
    console.log("Lowercase: " + lowerCase);
  }

  var special = confirm("Special Characters: \nWould you like to use special characters (a-z)?");
  if (!special) {
    alert("Special characters will not be used in your password.")
    console.log("Special: " + special);
  } else {
    generatorCharacters = generatorCharacters.concat(arrSpecial);
    alert("Special characters will be used in your password.")
    console.log("Special: " + special);
  }



  // Generate the actual password!!!!
  var password = generatePassword();
  function generatePassword () {
  for(var i=0; i < pwLength; i++) {
    // This statement will run each time the loop is executed
    const character = generatorCharacters[Math.floor(Math.random() * generatorCharacters.length)];
    // Add a new character to the end of the arrPassword array
    arrPassword.push(character);
  }
  // Combine the elements of the array into a string
  passwordText = arrPassword.join("");
  // This will be the password the user sees
  alert("Your password will be in the box below.");
  console.log(passwordText);
  //Make the password appear on screen in the #password tagged element on the page!
  document.querySelector("#password").innerHTML = passwordText;
  console.log(generatorCharacters);


  // Clears for the next round
  generatorCharacters = [];
  console.log(generatorCharacters);
  arrPassword = [];
  console.log(arrPassword);
  passwordText = [];
  console.log(passwordText);
  userLength = false;
  console.log(userLength);
  }
}
// Add event listener to generate button
// This listener once assigned to the id to pay attention to, will start the writePassword function
// DO NOT MOVE FROM THE END OF THIS CODE
generateBtn.addEventListener("click", writePassword);




 /* function newWritePassword() {

  var userLength = window.prompt("Password Length: \nPlease enter a number between 8 and 128.");

  while (userLength&&((isNaN(userLength) || userLength < 8 || userLength > 128) {
    alert("Please enter a valid number between 8 and 128.");
    window.prompt("Password Length: \nPlease enter a number between 8 and 128.");
  }

  if (!userLength) {
    window.alert("Cancelled. Closing generator.");
    userLength = null;
    console.log("Cancelled " + userLength);
    return;

  } else if (userLength >= 8 && userLength <= 128) {
    pwLength = userLength;
    alert("Your password will be " + pwLength + " characters in length.");
    console.log("Password length: " + pwLength);
  }
}

*/
