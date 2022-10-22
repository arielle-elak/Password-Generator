// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    var passwordText = document.querySelector("#password");

    var password = generatePassword();

    function generatePassword() {
        return "Test"
    };

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
