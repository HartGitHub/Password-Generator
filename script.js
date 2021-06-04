// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  //.split makes each character a string and puts them into an array. An array is being built. The first index is [0]
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var specialChars = "~!@#$%^&*()_+".split("");
  var numberVals = "1234567890".split("");
  //bolean values to determine which chars will be utilized
  var useUpperCase;
  var useLowerCase;
  var useSpecialChars;
  var useNumberVals;
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
    useUpperCase = confirm("Would you like to include uppercase characters?");
    useLowerCase = confirm("Would you like to include lowercase characters?");
    useSpecialChars = confirm("Would you like to incldue special characters?");
    useNumberVals = confirm("Would you like to include numeric characters?");
  } else {
    alert(
      "Invalid password length entered. Please enter a password between 8-128 characters"
    );
    generatePassword();
  }
  if (useUpperCase || useLowerCase || useSpecialChars || useNumberVals) {
    alert("Preferences are now set. Your password will be generated now.");
  } else {
    alert(
      "Please select at least one character value to generate your password"
    );
    generatePassword();
  }
  var charsToUse = [];
  for (let i = 0; i < passwordLength; i++) {
    if (useUpperCase) {
      charsToUse.push(upperCase[Math.floor(Math.random() * upperCase.length +1)]);
    }
    if (useLowerCase) {
      charsToUse.push(lowerCase[Math.floor(Math.random() * lowerCase.length +1)]);
    }
    if (useSpecialChars) {
      charsToUse.push(
        specialChars[Math.floor(Math.random() * specialChars.length +1)]
      );
    }
    if (useNumberVals) {
      charsToUse.push(
        numberVals[Math.floor(Math.random() * numberVals.length +1)]
      );
    }
  }
  console.log(charsToUse);
  // final password array
  
  var finalPassword = [];
  for (let i = 0; i < passwordLength; i++) {
    finalPassword.push(
      charsToUse[Math.floor(Math.random() * charsToUse.length)]
    );
  }
  return finalPassword.join("");
}

//NOTES** Include if statement
//  with all char values and utilize or, so that true will be utilizied end with an else that a char must be selected. Make a for loop passwordLength instead of array.length

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
