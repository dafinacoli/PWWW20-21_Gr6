var email= document.forms['form1']['email'];
var password= document.forms['form1']['password'];

var error_email= document.getElementById('err_email');
var error_password= document.getElementById('err_password');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', password_Verify);


function validated(){
    if(email.value.length<9){
         error_email.style.display= "block";
         return false;
    }
   

    if(password.value.length<9){
        error_password.style.display= "block";
        return false;
   }
}

function email_Verify(){
    if(email.value.length>8){
        error_email.style.display= "none";
        return true;
   }
}

function password_Verify(){
    if(password.value.length>8){
        error_password.style.display= "none";
        return true;
   }
}

//validimi per sign-up

var email2= document.forms['form2']['email2'];
var password2= document.forms['form2']['password2'];
var confirm= document.forms['form2']['confirm'];

var error_email2= document.getElementById('err_email2');
var error_password2= document.getElementById('err_password2');
var error_confirm=document.getElementById('err_password3');

email2.addEventListener('textInput', email2_Verify);
password2.addEventListener('textInput', password2_Verify);

function validated2(){
    if(email2.value.length<9){
         error_email2.style.display= "block";
         return false;
    }
   

    if(password2.value.length<9){
        error_password2.style.display= "block";
        return false;
   }

   if(password2.value!=confirm.value){
    error_confirm.style.display= "block";
    return false;
    }
}

function email2_Verify(){
    if(email2.value.length>8){
        error_email2.style.display= "none";
        return true;
   }
}

function password2_Verify(){
    if(password2.value.length>8){
        error_password2.style.display= "none";
        return true;
   }
}

