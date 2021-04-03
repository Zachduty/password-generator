//Assignment Code

var generateBtn = document.querySelector("#generate"); 



var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var special = "~!@#$%^&*()_-=;:?<>[]\.,|{}";
var allChoices = "";


  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
  
  
  
function generatePassword() {  

//   var allChoices = "";
  var password = "";
  
  var length = prompt("Enter a character amount between 8-128");
  if (length < 8 || length > 128) {
    alert("Password needs to be between 8 and 128 characters");
    return;
  }

    
    var lowerCasechar = confirm("Would you like to include lowercase letters?");
    var upperCaseChar = confirm("Would you like to include uppercase letters?");
    var numbs = confirm("Would you like to include numbers?");
    var specialChar = confirm("Would you like to include special characters?");
  
if(lowerCase || upperCase || num || special){
  if (lowerCase){
  allChoices += lowerCase
//   console.log(allChoices);
}
if(upperCase){
  allChoices += upperCase
//   console.log(allChoices);
}
if(num){
  allChoices += num //number//
//   console.log(allChoices);
}
if(special){
  allChoices += special
//   console.log(allChoices);
}

var lengthOfPass = allChoices.length;
   for ( var i = 0; i < length; i++ ) {
      password += allChoices.charAt(Math.floor(Math.random() * lengthOfPass));
   }
   return password;
  }else{
    alert("You must select at least one character type.");
    return;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //when generate button is clicked then call writepassword function