// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Function checks password length and confirms all characters/numbers to include
//Displays the password after the generatePassword function is completed
function writePassword() {
  var passwordLength = prompt("How many characters long do you want your password? Must be more than 8 and less than 128 characters long");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a value between 8 and 128.");
    return;
  }
  var lowerCase = confirm("Do you want lowercase letters?");
  var upperCase = confirm("Do you want uppercase letters?");
  var numeric = confirm("Do you want numbers?");
  var specialCharacters = confirm("Do you want special characters?");

//Used to store the generated password obtained fron the generatePassword function
  var password = generatePassword(passwordLength, lowerCase, upperCase, numeric, specialCharacters);

//Displays password for user to copy
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Function is used to generate the random password
function generatePassword(length, useLowerCase, useUpperCase, useNumeric, useSpecialCharacters) {
  
  var password = "";
  var characterOptions = "";

//if statements run if the confirm variables are true, and adds characterOptions to a single string
  if (useLowerCase === true) {
    characterOptions += "abcdefghijklmnopqrstuvwxyz";
  }
  if (useUpperCase === true) {
    characterOptions += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (useNumeric === true) {
    characterOptions += "0123456789";
  }
  if (useSpecialCharacters === true) {
    characterOptions += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  }

  if (characterOptions.length === 0) {
    return 'No character options selected. Please choose at least one type of characters.';
  }

  //Randomizes all values in the characterOptions string
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterOptions.length);
    password += characterOptions[randomIndex];
  }
  //Returns the generated password
  return password;
}