// var username = document.getElementById("username");
// var email = document.getElementById("email");
// var password = document.getElementById("password");
// var phone = document.getElementById("phone");

// var usernameError = document.getElementById("error");
// var passwordError = document.getElementById('erro');
// var emailError = document.getElementById('err');
// var phoneError = document.getElementById('rr');
// var submitBtn = document.getElementById("btn");

// submitBtn.addEventListener("click", function () {
//     usernameError.innerText = "";
//     passwordError.innerText = "";
//     emailError.innerText = "";
//     phoneError.innerText = "";

//   if (username.value === "") {
//     usernameError.innerText = "name is required";
//   }
//   if (password.value.length <= 8) {
//     passwordError.innerText = "password must be 8 character";
//   }

//   if (!email.value.include("@")) {
//     emailError.innerText = "This is not vaild email";
//   }

//   if (phone.value.length <= 10) {
//     phoneError.innerText = "phone number must be 11 degit";
//   }
// });

var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var phone = document.getElementById("phone");

var usernameError = document.getElementById("error");
var passwordError = document.getElementById("erro");
var emailError = document.getElementById("err");
var phoneError = document.getElementById("rr");
var submitBtn = document.getElementById("btn");


function isValidEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

submitBtn.addEventListener("click", function (event) {
  usernameError.innerText = "";
  passwordError.innerText = "";
  emailError.innerText = "";
  phoneError.innerText = "";

  if (username.value === "") {
    usernameError.innerText = "Name is required";
  }

  if (password.value.length < 8) {
    passwordError.innerText = "Password must be at least 8 characters";
  }

  if (!isValidEmail(email.value)) {
    emailError.innerText = "This is not a valid email";
}

  if (phone.value.length < 11) {
    phoneError.innerText = "Phone number must be 11 digits";
  }
});
