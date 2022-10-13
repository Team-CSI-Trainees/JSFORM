var firstnameerror= document.getElementById('firstnameerror');
var lastnameerror= document.getElementById('lastnameerror');
var phonenumbererror= document.getElementById('phonenoerror');
var gendererror= document.getElementById('gendererror');
var countryerror= document.getElementById('countryerror');
var emailerror= document.getElementById('emailerror');
var passworderror= document.getElementById('passworderror');
var messageerror= document.getElementById('messageerror');
var submiterror= document.getElementById('submiterror');
var state=false;
var passworderror = document.getElementById('passworderror');

function valfirstname(){
    var firstname = document.getElementById('firstname').value;
    if (firstname.length == 0){
        firstnameerror.innerHTML= 'First name is a required field';

        return false;
    }

    if(!firstname.match(/^[A-Za-z]*$/)){
        firstnameerror.innerHTML= 'Incorrect Format';
        return false;

    }

    firstnameerror.innerHTML= '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function vallastname(){
    var lastname = document.getElementById('lastname1').value;
    if (lastname.length == 0){
        lastnameerror.innerHTML= 'Last name is a valid field';
        return false;
    }

    if(!lastname.match(/^[A-Za-z]*$/)){
        lastnameerror.innerHTML='Incorrect Format';
        return false;
    }

    lastnameerror.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;

    
    
}

function valphone(){
    var phoneno = document.getElementById('phone').value;
    if (phoneno.length == 0){
        phonenumbererror.innerHTML= 'Phone Number is a required field';
        return false;
    }

    if(!phoneno.match(/^[6-9]*[0-9]{9}$/)){
        phonenumbererror.innerHTML= 'Only digits please';
        return false;


    }

    if(!phoneno.length==10){
        phonenumbererror.innerHTML= 'The phone number should only be of 10 digits '
        return false;
    }

    phonenumbererror.innerHTML= '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function valgen(){
    male= document.getElementById('gen1').checked;
    female=document.getElementById('gen2').checked;
    others=document.getElementById('gen3').checked;

    if((male=="")&&(female=="")&&(others=="")){
        gendererror.innerHTML='Please Chose one';
        return false;

    }

    gendererror.innerHTML= '<i class="fa-solid fa-circle-check"></i>';

}

function valcount(){
    var country = document.getElementById('selection').value;
    if(country=="select country"){
        countryerror.innerHTML='Enter a country';
        return false;

    }
    countryerror.innerHTML= '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function valemail(){
    var email= document.getElementById('emailadd').value;

    if(email.length==0){
        emailerror.innerHTML="E-mail is a required field";
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailerror.innerHTML='Invalid E-mail';
        return false;
    }

    emailerror.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true;

}

function valpass(){
    var newpass= document.getElementById('pass1').value;

    if(newpass.length==0){
        passworderror.innerHTML="Paassword is a compulsary field";
        return false;

    }

    if(newpass.length < 8 || newpass.length > 16){
        passworderror.innerHTML="Minimum 8 characters";
        return false;
    }

    if(!newpass.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
        passworderror.innerHTML="Invalid Syntax";
        return false;
    }

    passworderror.innerHTML='<i class="fa-solid fa-circle-check"></i>';

}

function valmes(){
    var message = document.getElementById('text').value;
    var min = 10;
    var left = 10-message.length;

    if(left>0){
        messageerror.innerHTML= left  + '' +  'more characters required';
        return false;
    }

    messageerror.innerHTML='<i class="fa-solid fa-circle-check"></i>';

}

function returnvalsub() {
    console.log(document.getElementById('firstname').value);
    console.log(document.getElementById('lastname1').value);
    console.log(document.getElementById('phone').value);
    console.log(document.getElementById('cont').value);
    console.log(document.getElementById('emailadd').value);
    console.log(document.getElementById('pass1').value);
    console.log(document.getElementById('text').value);

     submiterror.innerText = "Fill all the fields first";
}