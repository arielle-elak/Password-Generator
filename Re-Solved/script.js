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
        debugger;
    }

    if (isNaN(userLength) || userLength === "") {
        alert("Please enter a valid number or press Cancel to exit.");
        promptPassword();
    };

    if (userLength < 8 || userLength > 128) {
        alert("Password must be at least 8 but no more than 128 characters in length.")
        promptPassword();
    };

    if (userLength === "null") {
        alert("Closing generator");
        return;
    };


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
