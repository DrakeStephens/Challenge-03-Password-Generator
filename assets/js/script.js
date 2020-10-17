var generateBtn = document.getElementById('generate');
// Assignment code here
var slider = document.getElementById("myRange");
const val = slider.value
const output = document.getElementById("demo");
const current = output.innerHTML = val; // Display the default slider value
const password = document.getElementById('password');

const string = "abcdefghijklmnopqrstuvwxyz`~1234567890!@#$%^&*()_+=-|";




// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}


// Get references to the #generate element


// Write password to the #password input
function wPassword(l, characters){
  
  var pwd = '';

  for(var i = 0; i<l; i++){
      pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password.innerHTML = pwd;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  password.innerHTML = "";
  console.log('hi')
  console.log(wPassword(slider.value, string))
  wPassword(slider.value, string)
});
