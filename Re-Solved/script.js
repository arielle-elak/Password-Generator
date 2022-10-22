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
        console.log(userLength);
        if (userLength === "") {
            console.log("User length: " + userLength);
            alert("No input. Please enter a number or hit Cancel.")
            generatePassword();
        } else if (isNaN(userLength)) {
            console.log(userLength);
            alert("Please enter a valid number or hit Cancel.");
            generatePassword();
        } else if (userLength >= 8 && userLength <= 128) {
            console.log(userLength);
            alert("Your password will be " + userLength + " characters in length.");
            return userLength;
        }
        console.log(userLength);
        let password = userLength;
        return password;
    };

    // Make the HTML text value inside of #passoword equal to whatever the password variable equa;s
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
