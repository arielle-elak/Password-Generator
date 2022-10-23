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

    console.log("First phase done");
    console.log(passwordObject);

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

        if (userSpecial === true) {
            passwordObject.special = true;
        };

        if (userNumeric === true) {
            passwordObject.numeric = true;
        };

        if (userUpper === true) {
            passwordObject.upper = true;
        };

        if (userLower === true) {
            passwordObject.lower = true;
        };
    };
    console.log("Second phase done");
    console.log(passwordObject);

};

// Generate the password based on the user prompts
function generatePassword() {
    promptPassword();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
