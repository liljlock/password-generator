// Assignment Code
var generateBtn = document.querySelector("#generate");
var length =false;
var lowerCase =false;
var upperCase =false;
var numbers =false;
var specialChar =false;
var nums="0123456789";
var spec="!@#$%^&*";
var lowerLetters="abcdefghijklmnopqrstuvwxyz";
var upperLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function charPrompt() {
  length= prompt("Password length (8-128)");

  if(length<8){
    length=8;
  }
  if(length>128){
    length=128;
  }

  lowerCase= confirm("Include lower case letters? (Ok=yes/Cancel-no)");
  upperCase= confirm("Include upper case letters? (Ok=yes/Cancel-no)");
  specialChar= confirm("Include special characters (Ok=yes/Cancel-no)");
  numbers= confirm("Include numbers (Ok=yes/Cancel-no)");
  writePassword();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var charString = "";
  if (lowerCase){
    charString = charString.concat(lowerLetters);
  }
  if (upperCase) {
    charString = charString.concat(upperLetters);
  }
  if (numbers) {
    charString = charString.concat(nums);
  }
  if (specialChar) {
    charString = charString.concat(spec);
    
  }
  var password = "";

  for(var i = 0; i < length; i++) {
    var char = charString.charAt(Math.floor(Math.random() * charString.length));
    password = password.concat(char);
  }


  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
