var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var phone = document.getElementById('phone');

var error = document.getElementById('error');
var erro = document.getElementById('erro');
var err = document.getElementById('err');
var rr = document.getElementById('rr');
var btn = document.getElementById('btn');


btn.addEventListener("click", function(){
    if(username.value === null || username.value === ''){
error.innerText = "name is required";
    }
if(password.value.length <= 8){
    erro.innerText = "password must be 8 character";
}

if(email.value.invludes("@")){
err.innerText = "valid email";
}
else{
    err.innerText = "This is not vaild email";
}

if(phone.value.length <= 10){
    rr.innerText = "phone number must be 11 degit";
}
})
