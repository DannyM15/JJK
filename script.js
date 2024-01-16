// Assignment Code - Given
var generateBtn = document.querySelector("#generate");

// Characters to be used in each variable
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&()_+~`|}{[]:;?><,./-=";

function generatePassword() {

  // Function to generate the password
  function generatePassword() {
    // Ask how many characters the PW should be
    var passwordLength = prompt("Enter the length of the password (between 8 and 128 characters):");

    // Check length to make sure its the correct amount
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Sorry! Your password must be between 8 and 128 characters.");
      return;
    }

    // Boolean to confirm which character type is used in the PW
    var includeLower = confirm("Would you like lowercase characters?");
    var includeUpper = confirm("Would you like uppercase characters?");
    var includeNumeric = confirm("Would you like numeric characters?");
    var includeSpecial = confirm("Would you like special characters?");

    // Confirm at least one choice was used
    if (!includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
      alert("Uh oh! please select at least 1 character type.");
      return;
    }



    // If statements from the character type selection
    var characterSet = "";
    if (includeLower) {
      characterSet += lowerCase;
    }
    if (includeUpper) {
      characterSet += upperCase;
    }
    if (includeNumeric) {
      characterSet += numbers;
    }
    if (includeSpecial) {
      characterSet += special;
    }

    // Generate the password
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * characterSet.length);
      password += characterSet[randomIndex];
    }

    // Return the password
    return password;
  }

 // Generate the created password 
  var password = generatePassword();

  // Check and log the passwords generated
  console.log("Password: " + password);

  // Display the password
  return password; 
}

// Write password to the #password input - Given
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button - Given
generateBtn.addEventListener("click", writePassword);
