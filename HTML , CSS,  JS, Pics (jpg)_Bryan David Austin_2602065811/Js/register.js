function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phonenumber = document.getElementById("phonenumber").value;
    // e.preventDefault();
    var female = document.getElementById("female").checked;
    var male = document.getElementById("male").checked;
    var checkbox = document.getElementById("checkbox").checked;
  
    if (username == "") {
      alert("Username cannot be empty");
    } else if (!email.endsWith("@gmail.com")) {
      alert("Email used must ends with @gmail.com");
    } else if (!checkPassword(password)) {
      alert("Password must be atleast 8 characters and is alphanumeric");
    } else if (phonenumber.charAt(0) != 0) {
      alert("Phonenumber must start with 0");
    } else if (!female && !male) {
      alert("Please choose your gender");
    } else if (!checkbox) {
      alert("Terms & Policy must be agreed");
    } else {
      alert("Form submitted");
    }
  }
  
  function checkPassword(password) {
    if (password.length < 8) {
      return false;
    }
    isAlpha = false;
    isNum = false;
    for (var i = 0; i < password.length; i++) {
      if (isNaN(password[i])) {
        isAlpha = true;
      } else {
        isNum = true;
      }
      if (isNum && isAlpha) {
        return true;
      }
    }
    return false;
  }