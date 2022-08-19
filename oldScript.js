// Password Generator
// Last updated by Arielle Schlickman Elak Aug 14 2022


// Assignment Code
//The id of the button in HTML is "generate"
// The listener at the bottom will watch for activity in the button#generate zone
var generateBtn = document.querySelector("#generate");

// Global variables that will change depending upon the user's input
var pwlength = 0;
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
  arrPassword = [];
   // This will watch for when the var passwordText has a value assigned
  // And to link it to the area on the page that has the password id
  var passwordText = document.querySelector("#password");
// Data collected from prompt window
  let userLength = window.prompt("How long would you like your password to be? \nType a number between 8 and 128.");

  if (userLength <= 128 && userLength >= 8) {
    alert("You have chosen " + userLength + " characters in length.");
    pwlength = userLength;
    console.log(pwlength);

  // If user does not enter anything or presses Cancel, the generator will close down.
  } else {
    alert("Closing generator.")
    return;
  };

  // Variable userNumber collected from prompt window - answer becomes numbers value
  let userNumber;
  if (confirm("Would you like to use numbers (0-9)? \nClick OK for yes, Cancel for no.")) {
    alert("You have selected to include numbers.");
    numbers = true;
    console.log(numbers + " numbers");
  } else {
    alert("You have selected not to include numbers.");
    numbers = false;
    console.log(numbers + " numbers");
  }

// Variable userUpper collected from prompt window - answer becomes upper value
  let userUpper;
  if (confirm("Would you like to use UPPERCASE characters? \nClick OK for yes, Cancel for no.")) {
    alert("You have selected to include UPPERCASE characters.");
    upper = true;
    console.log(upper + " UPPERCASE");
  } else {
    alert("You have selected not to include UPPERCASE characters.");
    upper = false;
    console.log(upper + " UPPERCASE");
  }

  // Variable userLower collected from prompt window - answer becomes lower value
  let userLower;
  if (confirm("Would you like to use lowercase characters? \nClick OK for yes, Cancel for no.")) {
    alert("You have selected to include lowercase characters.");
    lower = true;
    console.log(lower + " lowercase");
  } else {
    alert("You have selected to not include numbers.");
    lower = false;
    console.log(lower + " lowercase");
  }

 // Variable userSpecial collected from prompt window - answer becomes special value
  let userSpecial;
  if (confirm("Would you like to use special characters such as @, ?, !, $. \nClick OK for yes, Cancel for no.")) {
    alert("You have selected to include special characters.");
    special = true;
    console.log(special + " special characters");
  } else {
    alert("You have selected not to include special characters.");
    special = false;
    console.log(special + " special characters");
  }


  // If all options selected - combine all arrays
  if (numbers&&upper&&lower&&special) {
    alert("A password length of "+ pwlength + " will be created to contain \nnumbers, UPPERCASE letters, lowercase letters, and special characters.");
    generatorCharacters = arrNumbers.concat(arrUppercase, arrLowercase, arrSpecial);
    generatePassword();


    // If all but numbers selected - combine all arrays except for arrNumbers
  } else if (!numbers&&upper&&lower&&special) {
    alert("A password length of "+ pwlength + " will be created to contain \nUPPERCASE letters, lowercase letters, and special characters.");
    generatorCharacters = arrUppercase.concat(arrLowercase, arrSpecial);
    generatePassword();

  // If all but upper selected - combine all arrays except for arrUpper
  } else if (numbers&&!upper&&lower&&special) {
    alert("A password length of "+ pwlength + " will be created to contain \nnumbers, lowercase letters, and special characters.");
    generatorCharacters = arrNumbers.concat(arrLowercase, arrSpecial);
    generatePassword();

  // If all but lower selected - combine all arrays except for arrLower
  } else if (numbers&&upper&&!lower&&special) {
    alert("A password length of "+ pwlength + " will be created to contain \nnumbers, UPPERCASE letters, and special characters.");
    generatorCharacters = arrNumbers.concat(arrUppercase, arrSpecial);
    generatePassword();

   // If only lower and special selected - combine only arrNumbers and arrSpecial
  } else if (numbers&&upper&&!lower&&!special) {
    alert("A password length of "+ pwlength + " will be created to contain \nnumbers and UPPERCASE letters.");
    generatorCharacters = arrNumbers.concat(arrUppercase);
    generatePassword();

   // If only upper and lower selected - combine only arrUpper and arrLower
  } else if (!numbers&&upper&&lower&&!special) {
    alert("A password length of "+ pwlength + " will be created to contain \nUPPERCASE and lowercase letters.");
    generatorCharacters = arrUppercase.concat(arrLowercase);
    generatePassword();

  // If only lower and special selected - combine only arrLower and arrSpecial
  } else if (!numbers&&!upper&&lower&&special) {
    alert("A password length of "+ pwlength + " will be created to contain \nlowercase letters and special characters.");
    generatorCharacters = arrLowercase.concat(arrSpecial);
    generatePassword();

  // If only numbers and special selected - combine only arrNumbers and arrSpecial
  } else if (numbers&&!upper&&!lower&&special) {
    alert("A password length of "+ pwlength + " will be created to contain \nnumbers and special characters.");
    generatorCharacters = arrNumbers.concat(arrSpecial);
    generatePassword();

  // If only numbers selected - use arrNumbers only
  } else if (numbers) {
    alert("A password length of "+ pwlength + " will be created to contain numbers only.");
    generatorCharacters = arrNumbers;
    generatePassword();

  // If only upper selected - use arrUpper only
  } else if (upper) {
    alert("A password length of "+ pwlength + " will be created to contain UPPERCASE letters only.");
    generatorCharacters = arrUppercase;
    generatePassword();

  // If only lower selected - use arrLower only
  } else if (lower) {
    alert("A password length of "+ pwlength + " will be created to contain lowercase letters only.");
    generatorCharacters = arrLowercase;
    generatePassword();

  // If only special selected - use arrSpecial only
  } else if (special) {
    alert("A password length of "+ pwlength + " will be created to contain special characters.");
    generatorCharacters = arrSpecial;
    generatePassword();

  // If user did not select any input, brings user back to the first prompt for length.
  } else {
    alert("You have not selected any options. \n Returning to the start of the wizard.")
    console.log("User started over");
    writePassword();
  }
}

// Generate the actual password!!!!
var password = generatePassword();
function generatePassword () {
for(var i=0; i < pwlength; i++) {
  // This statement will run each time the loop is executed
  const character = generatorCharacters[Math.floor(Math.random() * generatorCharacters.length)];
  // Add a new character to the end of the arrPassword array
  arrPassword.push(character);
}
// Combine the elements of the array into a string
passwordText = arrPassword.join("");
// This will be the password the user sees
console.log(passwordText);
//Make the password appear on screen in the #password tagged element on the page!
document.querySelector("#password").innerHTML = passwordText;
}


// Add event listener to generate button
// This listener once assigned to the id to pay attention to, will start the writePassword function
// DO NOT MOVE FROM THE END OF THIS CODE
generateBtn.addEventListener("click", writePassword);
