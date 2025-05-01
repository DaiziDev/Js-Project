

var myInput = document.getElementById('psw');
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var length = document.getElementById('length');
var characters = document.getElementById('characters')

myInput.onfocus = function(){
  document.getElementById("message").style.display = "block"
}
myInput.onblur = function(){
    document.getElementById("message").style.display = "none"
}

myInput.onkeyup = function(){
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)){
        letter.classList.remove('invalid');
        letter.classList.add('valid');
        myInput.style.border = "2px solid green"
    }else{
        letter.classList.remove('valid');
        letter.classList.add('invalid');
        myInput.style.border = "2px solid red"
    }


    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)){
        capital.classList.remove('invalid');
        capital.classList.add('valid');
        myInput.style.border = "2px solid green"
    }else{
        capital.classList.remove('valid');
        capital.classList.add('invalid');
        myInput.style.border = "2px solid red"
    }

    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)){
        number.classList.remove('invalid');
        number.classList.add('valid');
        myInput.style.border = "2px solid green"
    }else{
        number.classList.remove('valid');
        number.classList.add('invalid');
        myInput.style.border = "2px solid red"
    }

    
    if(myInput.value.length >= 8){
        length.classList.remove('invalid');
        length.classList.add('valid');
        myInput.style.border = "2px solid green"
    }else{
        length.classList.remove('valid');
        length.classList.add('invalid');
        myInput.style.border = "2px solid red"
    }

    var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g; 
    if(myInput.value.match(specialCharacters)){
        characters.classList.remove('invalid');
        characters.classList.add('valid');
        myInput.style.border = "2px solid green"
    }else{
        characters.classList.remove('valid');
        characters.classList.add('invalid');
        myInput.style.border = "2px solid red"
    }
}

var seePsw = document.getElementById('eyeclose');
var hidePsw = document.getElementById('eyeopen')
seePsw.addEventListener('click', function(){
    if(myInput.getAttribute("type") === "password"){
        myInput.setAttribute("type", "text");
        seePsw.style.opacity = '1'
        hidePsw.style.opacity = '0'
    }
    else{
        myInput.setAttribute("type", "password");
        seePsw.style.opacity = '0'
        hidePsw.style.opacity = '1'
    }
})