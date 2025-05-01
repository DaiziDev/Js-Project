
const ecran = document.getElementById("ecran"); 
const boutons = document.querySelectorAll("button");

boutons.forEach(bouton => {
  bouton.addEventListener("click", () => { 
    const valeur = bouton.textContent; 

    switch (valeur) {
      case "=":
        try {
          ecran.value = eval(ecran.value); 
        } catch (error) {
          ecran.value = "Erreur"; 
        }
        break;
      case "C":
        ecran.value = ""; 
        break;
      default:
        ecran.value += valeur; 
    }
  });
});

