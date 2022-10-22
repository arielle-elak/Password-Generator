// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    // Select the area denoted by #password as save it as the passwordText variable
    var passwordText = document.querySelector("#password");

    // The value of password will be equal to what generatePassword returns
    var password = generatePassword();

     // generatePassword will ask the questions to determine the content of the password
    function generatePassword() {
        var userLength = window.prompt("Password Length:\nPlease enter a number between 8 and 128.")
        if (!userLength) {
            alert("No input.")
        }
        return userLength
    };

    // Make the HTML text value inside of #passoword equal to whatever the password variable equa;s
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
