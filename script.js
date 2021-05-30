// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var specialChars = "~!@#$%^&*()_+".split("");
  var numberVals = "1234567890".split("");
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters

  var passwordLength = prompt(
    "How many characters would you like to include for your password?"
  ).trim();
  if (passwordLength > 7 && passwordLength < 129) {
    // WHEN prompted for character types to include in the password
    // THEN I choose lowercase, uppercase, numeric, and/or special characters
    upperCase = confirm("Would you like to include uppercase characters?");
    lowerCase = confirm("Would you like to include lowercase characters?");
    specialChars = confirm("Would you like to incldue special characters?");
    numberVals = confirm("Would you like to include numeric characters?");
  } else {
    alert(
      "Invalid password length entered. Please enter a password between 8-128 characters"
      );
      generatePassword()
  }
}

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

generateBtn.addEventListener("click", writePassword);
