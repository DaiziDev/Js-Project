var copyBtn = document.getElementById('copypass')

function getPassword(){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var passwordLength = 16;
    var password = ""

    //Genere le mot de passe
    for(let i = 0; i < passwordLength ; i++){
        let randomNumber = Math.floor(Math.random() * chars.length)

        password += chars.substring(randomNumber, randomNumber + 1);

        //Afficher le mot de passe

        document.getElementById('password').value = password;

        //Changer le style du boutton copier

       copyBtn.style.background = "#6c757d"
       copyBtn.style.color = "white"

    }
}

// Copier le mot de passe 

function copyMdPasse(){
    var inputPassword = document.getElementById('password');
    //Verifier la longeur du mot de passe

    if(inputPassword.value.length === 16){
        //copy password
        inputPassword.select();
        document.execCommand("copy");

        copyBtn.style.background ="transparent";
        copyBtn.style.color ="#000"

        alert("Password has been copy succesfuly")
    }
    else{
        alert('Generate first a password')
    }
}

