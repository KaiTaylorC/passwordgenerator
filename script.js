// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.innerHTML = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Ask for user to choose a password between 8 and 128 character//
var userPrompt = prompt("Choose a password length between 8 and 128 characters");

var specialCharacters = confirm("Does this password need special characters?");

var capitalization = confirm("Does this password need capital letters?");

var number = confirm("Does this password need a number?");

var lowercase = confirm("Does this password need lowercase letters?");

var passwordLength = parseInt(userPrompt);

function generatePassword(){
 
  //in case of user not using any prompts given//
  if ((specialCharacters === false) && (capitalization === false) && (number === false) && (lowercase === false)){
  alert("Please choose at least one or more item(s) for your password to contain");
}
  //validate password length//
  if (passwordLength < 8) {
    alert("Password must be at least 8 characters");
  } else if (passwordLength > 128) {
    alert("Password must be less than 128 characters")
  } else if (passwordLength === null) {
    alert("Please choose a password length between 8 and 128 characters");
  }
 
  //to get special characters//
function randomizeSpecial(){
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", "0", "'", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "[", "_", "`", "{", "}", "]", "|", "~"]
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}
  //to get random capital letters//
function randomizeCapital(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
  //to get random numeric value//
function randomizeNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
  //to get random lowercase letters//
function randomizeLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

var areTrue = (specialCharacters === true) +  (capitalization === true) + (number === true) + (lowercase === true);

//empty string for the loop//
var randomizedPassword = "";

//for loop//
for (let i = 0; i < passwordLength; i++) {
  var numberChosen = Math.floor(Math.random() * areTrue);
  var array = [];

  if (specialCharacters === true) {
    array.push(randomizeSpecial)
  }
  if (capitalization === true) {
    array.push(randomizeCapital)
  }
  if (number === true) {
    array.push(randomizeNumber)
  }
  if (lowercase === true) {
    array.push(randomizeLower)
  }
  randomizedPassword += array[numberChosen]();
}
return randomizedPassword;
}