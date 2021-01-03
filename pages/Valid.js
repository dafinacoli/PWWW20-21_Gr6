var email = document.forms['forma1']['email'];
var password = document.forms['forma1']['password'];

var error_email = document.getElementById('err_email');
var error_password = document.getElementById('err_password');


//Input Password and Submit [6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter]
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
var emailPattern = /^[a-z0-9.-]+@[a-z]+\.[a-z]{2,4}$/;

function validated() {
    error_email.style.display = "none";
    error_password.style.display = "none";
    try { 
        if(email.value == "")  throw "Please fill up your email";
        if(emailPattern.exec(email.value) == null) throw "This email doesn't exists"; //Kthen null nese plotesohet, perndryshe nese permbahet ndonje element qe nuk gjendet ne emailPattern ktheet null
      }
      catch(err) {
        error_email.innerHTML = err;
        error_email.style.display = "block";
        return false;
      }
     if (password.value.length == 0) {
        error_password.innerHTML = "Please fill up your password";
        error_password.style.display = "block";
        return false;
    }
    else if (password.value.length < 6 || !(password.value.match(passw)) || password.value.length > 20) {
        error_password.innerHTML = "Wrong Password";
        error_password.style.display = "block";
        return false;
    }

}

function email_Verify() {
    if (email.value.match(emailPattern)) {
        error_email.style.display = "none";
        return true;
    }
}

function password_Verify() {
    if (password.value.match(passw)) {
        error_password.style.display = "none";
        return true;
    }
}

//validimi per sign-up

var email2 = document.forms['form2']['email2'];
var password2 = document.forms['form2']['password2'];
var confirmP = document.forms['form2']['confirm'];

var error_email2 = document.getElementById('err_email2');
var error_password2 = document.getElementById('err_password2');
var error_confirm = document.getElementById('err_password3');

email2.addEventListener('textInput', email2_Verify);
password2.addEventListener('textInput', password2_Verify);
confirmP.addEventListener('textInput', password2_Verify);

var mesazhi = error_password2.innerHTML.replace('enter a', 'enter a valid ') + ". Password should have 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter";

function validated2() {
    error_email2.style.display = "none";
    error_password2.style.display = "none";
    error_confirm.style.display = "none";
    if (email2.value.length == 0) {
        error_email2.innerHTML = "Please fill up your email";
        error_email2.style.display = "block";
        return false;
    }
    else if (!(email2.value.match(emailPattern))) {
        error_email2.innerHTML = "Please enter a valid email";
        error_email2.style.display = "block";
        return false;
    }
    else if (password2.value.length == 0) {
        error_password2.style.display = "block";
        return false;
    }
    else if (!(password2.value.match(passw))) {
        error_password2.innerHTML ="" + mesazhi;
        error_password2.style.display = "block";
        return false;
    } 
    else if (confirmP.value.length == 0) {
        error_confirm.innerHTML = "Please re-enter password"
        error_confirm.style.display = "block";
        return false;
    }
    else if(password2.value != confirmP.value) {
        error_confirm.innerHTML = "Passwords don't match";
        error_confirm.style.display = "block";
        return false;
    }
}

function email2_Verify() {
    if (email2.value.length != 0) {
        error_email2.style.display = "none";
        return true;
    }
}

function password2_Verify() {
    if (password2.value.length != 0) {
        error_password2.style.display = "none";
        return true;
    }
}

