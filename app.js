// Variables :
let valider = false;
operateur = "";
firstNumber = null;
secondNumber = null;
compteur = 1;

// AC :
function clearCalc() {
    document.getElementById("screen").value = null;
    firstNumber = secondNumber = null;
    compteur = 1;
}

// DEL :
function delLast() {
    if (document.getElementById("screen").value == "Erreur") {
        document.getElementById("screen").value = null;
    } else {
        document.getElementById("screen").value = document
            .getElementById("screen")
            .value.substring(0, document.getElementById("screen").value.length - 1);
    }
}

// Plus Minus :
function plusminus() {
    document.getElementById("screen").value = document.getElementById("screen").value * -1;
}

// Racine Carré :
function racineCarre() {
    if (document.getElementById("screen").value >= 0) {
        document.getElementById("screen").value = Math.sqrt(document.getElementById("screen").value);
    } else {
        document.getElementById("screen").value = "Erreur";
    }
}

// Ajout de chiffre :
function addNumber(id) {
    let value = id;
    if (id == "+" || id == "-" || id == "*" || id == "/" || id == "^") {
        valider = true;
        if (compteur > 1) {
            calcul();
        }
        firstNumber = Number(document.getElementById("screen").value);
        compteur++;
        operateur = id;
    } else if (id == "=") {
        calcul();
        compteur = 1;
    } else {
        if (valider) {
            document.getElementById("screen").value = null;
            valider = false;
        }
        document.getElementById("screen").value += value;
    }
}

// Calcul :
function calcul() {
    if (compteur > 1) {
        secondNumber = Number(document.getElementById("screen").value);
    } else {
        firstNumber = Number(document.getElementById("screen").value);
    }
    switch (operateur) {
        case "+":
            document.getElementById("screen").value = firstNumber + secondNumber;
            break;
        case "-":
            document.getElementById("screen").value = firstNumber - secondNumber;
            break;
        case "*":
            document.getElementById("screen").value = firstNumber * secondNumber;
            break;
        case "/":
            if (firstNumber != 0 && secondNumber != 0) {
                document.getElementById("screen").value = firstNumber / secondNumber;
            } else {
                document.getElementById("screen").value = "Erreur";
            }
            break;
        case "^":
            document.getElementById("screen").value = Math.pow(firstNumber, secondNumber);
            break;
    }
}

// Customisation :
const buttonCustom = document.querySelector(".pop_up_custom");
const calculatrice = document.querySelector(".container");
const screenCustomisation = document.querySelector(".screen_customisation");

buttonCustom.addEventListener("click", function (e) {
    e.preventDefault();

    this.classList.toggle("active");
    calculatrice.classList.toggle("customisation_on");
    screenCustomisation.classList.toggle("customisation_on");
});

// Screen Size :
function screenSizeCustom(screenValue) {
    document.getElementById("screen").style.fontSize = screenValue + "em";
}

// Mode Scientifique :
const checkboxScientifique = document.getElementById("checkboxScience");

checkboxScientifique.addEventListener("click", function () {
    calculatrice.classList.toggle("scientifique_on");
});

// RGB False :
const checkboxRGB = document.getElementById("checkboxRGB");

checkboxRGB.addEventListener("click", function () {
    calculatrice.classList.toggle("rgb_false");
});
