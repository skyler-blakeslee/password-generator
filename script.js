// Assignment Code
var generateBtn = document.querySelector('#generate');

// 4 possible character types in respective arrays
var uppercaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbersSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialSet = ["`","~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ",", "<", ".", ">", "/", "?"]
// Empty array for all potential characters to be added following confirmation
var characterSet = [];

// function generates and writes password after series of prompts
function generatePassword() {
  var pwlength = parseInt(prompt('How many characters?'));
  // Ensures selected character length is within correct range
  while (pwlength < 8 || pwlength > 128) pwlength = parseInt(prompt("Please choose a value between 8 and 128."));
  var upper = confirm("Include uppercase letters?");
  var lower = confirm("Include lowercase letters?");
  var numbers = confirm("Include numbers?");
  var special = confirm("Include special characters?");
  // Ensures at least one character type is selected
  while (!upper && !lower && !numbers && !special){
    alert ("You must choose at least one character type.");
    upper = confirm("Include uppercase letters?");
    lower = confirm("Include lowercase letters?");
    numbers = confirm("Include numbers?");
    special = confirm("Include special characters?");
  };
  console.log(typeof pwlength);
  console.log(pwlength);
  // Ads respective array to potential characterSet
  if (upper) { 
    characterSet = characterSet.concat(uppercaseSet)
  };
  if (lower) {
    characterSet = characterSet.concat(lowercaseSet)
  };
  if (numbers) {
    characterSet = characterSet.concat(numbersSet)
  };
  if (special) {
    characterSet = characterSet.concat(specialSet)
  };
  console.log(characterSet);

  // function randomly selects desired number of characters adding to newPassword array
  var newPassword = [];
  for(var i = 0; i < pwlength; i++){
  var randomCharacter = characterSet[Math.floor(Math.random() * characterSet.length)];
  newPassword.push(randomCharacter);
  }

  passwordFinal = newPassword.join("");
  console.log(passwordFinal);
  var passwordText = document.getElementById("password")
  passwordText.textContent = passwordFinal;
}

// Add event listener to generate button
generateBtn.addEventListener('click', generatePassword);
