// Password Generator .js Re-vamped
// Last Edited 10-22-2022

// Array from which random characters will be selected
var generatorArr = [];

// Array for final generated password
var passwordArr = [];

var specialCharacters = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*'
];

var numericCharacters = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10'
];

var upperCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];

var lowerCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];


var passwordObject = {
    "pwlength": 0,
    "special": false,
    "numeric": false,
    "upper": false,
    "lower": false,
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

function promptPassword() {

    let userLength = prompt(
        "Password Length:\nPlease enter a number between 8 and 128.");

    if ((userLength >= 8) && (userLength <= 128)) {
        alert("Your password will be " + userLength + " characters in length.");
        passwordObject.pwlength = userLength;
        console.log(passwordObject);
        characterOptions();

    } else if (isNaN(userLength) || userLength === "") {
        alert("Please enter a valid number or press Cancel to exit.");
        userLength = "";
        console.log("Invalid: " + userLength);
        promptPassword();

    } else if (userLength < 8 || userLength > 128) {
        alert("Password must be at least 8 but no more than 128 characters in length.")
        userLength = "";
        console.log("Length issue: " + userLength);
        promptPassword();

    } else if (userLength === "null") {
        console.log("User cancelled: " + userLength);
        alert("Closing generator");
        return;
    };
};



    // Confirm on alert to select type of characters for password
    // If user does not hit OK on any options, wizard will start over

function characterOptions() {

    var userSpecial = confirm(
            'Would you like to include special characters?\nClick OK for "Yes" or Cancel for "No".'
        );

        var userNumeric = confirm(
            'Would you like to include numbers?\nClick OK for "Yes" or Cancel for "No".'
        );

        var userUpper = confirm(
            'Would you like to include UPPERCASE letters?\nClick OK for "Yes" or Cancel for "No".'
        );

        var userLower = confirm(
            'Would you like to include lowercase letters?\nClick OK for "Yes" or Cancel for "No".'
        );

        // If no characters selected, return to start of character options
        if (userSpecial === false
            && userNumeric === false
            && userUpper === false
            && userLower === false) {
                alert("Password must have at least one character type.");
                characterOptions();
        };

        // If selection is true, concat the appropriate array into the generator array
        if (userSpecial === true) {
            passwordObject.special = true;
            console.log("Special characters selected")
            generatorArr = generatorArr.concat(specialCharacters);
        };

        if (userNumeric === true) {
            passwordObject.numeric = true;
            console.log("Numeric characters selected")
            generatorArr = generatorArr.concat(numericCharacters);
        };

        if (userUpper === true) {
            passwordObject.upper = true;
            console.log("Uppercase characters selected")
            generatorArr = generatorArr.concat(upperCharacters);
        };

        if (userLower === true) {
            passwordObject.lower = true;
            console.log("Lowercase characters selected")
            generatorArr = generatorArr.concat(lowerCharacters);
        };
    console.log("Selections made");
    console.log("Characters to use in generation: " + generatorArr);
};

// Generate the password based on the user prompts
function generatePassword() {
    promptPassword();

    for (var i=0; i < passwordObject.pwlength; i++) {
        // This statement will run each time the loop is executed
        const character = generatorArr[Math.floor(Math.random() * generatorArr.length)];
        // Add a new character to the end of the arrPassword array
        passwordArr.push(character);
    }

    // Combine the elements of the array into a string
    let password = passwordArr.join("");
    return password;
};

// Write outcome of generatePassword as the password variable
// Sent that content to the #password HTML section on the page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
