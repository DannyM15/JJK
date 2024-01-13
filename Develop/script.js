// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define character sets based on selected criteria
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&()_+~`|}{[]:;?><,./-=";

function generatePassword() {

  // Function to generate a random password
  function generatePassword() {
    // Prompt for the length of the password
    var passwordLength = prompt("Enter the length of the password (between 8 and 128 characters):");

    // Validate the password length
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Invalid password length. Please enter a number between 8 and 128.");
      return;
    }

    // Prompt for character types to include
    var includeLower = confirm("Include lowercase characters?");
    var includeUpper = confirm("Include uppercase characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");

    // Validate that at least one character type is selected
    if (!includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
      alert("Please select at least one character type.");
      return;
    }



    // Build the character set based on selected criteria
    var characterSet = "";
    if (includeLower) {
      characterSet += lowercaseChars;
    }
    if (includeUpper) {
      characterSet += uppercaseChars;
    }
    if (includeNumeric) {
      characterSet += numericChars;
    }
    if (includeSpecial) {
      characterSet += specialChars;
    }

    // Generate the password
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * characterSet.length);
      password += characterSet[randomIndex];
    }

    // Return the generated password
    return password;
  }

 // Call the generatePassword function
  var password = generatePassword();

  // Output the generated password
  console.log("Password: " + password);

  return password; 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
