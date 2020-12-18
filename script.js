// mes variables

let motCacher = document.getElementById("mot");
let historique = document.getElementById("proposition");
let element = document.getElementsByTagName("input")[0];
let testJoueur = document.getElementsByTagName("button")[0];
let tableau = [];
let tableauSoluce = [];
let choix = "";
let message = document.getElementById("message");

// je deffini un tableau avec les mots a trouver

let mots = [
    "valise", "tasse", "tableaux", "voiture", "ordinateur", "bureau", "pantalon", "jardin", "maison",
    "cendrier", "lampe", "tomate", "raisin", "pizza", "formation", "informatique", "fauteuil",
    "escalier", "telephone", "pomme", "furet", "chat", "chien", "poule", "couverture", "cigarette",
    "souris", "ecran", "figurine", "boite", "nuages", "console", "casque", "balance", "chaisse"
];

//je selectionne un des mots aleatoirement

let randomot = mots[Math.floor(Math.random() * mots.length)];
console.log("le mot a trouver : " + randomot);

// je cache le mot ramdom par des underscores et recupere le choix du joueur

testJoueur.addEventListener("click", function () {
    choix = element.value;
    historique.innerHTML += "jouer : " + choix.toLocaleUpperCase() + " / ";
    verif();

})
//je verifie si la lettre et dans le mot a trouver

for (let i = 0; i < randomot.length; i++) {
    tableau.push(randomot[i]);
    let caractere = randomot[i];
    motCacher.innerHTML += caractere.replace(randomot[i], "_ ");

    function verif() {
        if (tableau.includes(element.value)) {
            afficheLettre();
        } else if (choix === randomot) {
            message.innerHTML = "GAGNER !!!";
            message.style.color = "green";
        } else {
            message.innerHTML = "PERDU cherche encore !!";
            message.style.color = "red";
        }

        //si oui je l' affiche dans le mots
        function afficheLettre() {
            if (tableau[i].innerHTML === element.value) {
                tableau[i].style.visibility = "visible";
                motCacher.innerHTML = choix;
            }
        }
    }
}



