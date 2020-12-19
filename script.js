let mots = [
    "chaise", "feuille", "banane", "camion", "chaussure", "gendarme", "souris",
    "ascenseur", "brouette", "chemise", "valise", "tasse", "tableaux", "voiture", "ordinateur",
    "bureau", "pantalon", "jardin", "maison", "cendrier", "lampe", "tomate", "raisin", "pizza",
    "formation", "informatique", "fauteuil", "escalier", "telephone", "pomme", "furet", "chat",
    "chien", "poule", "couverture", "cigarette", "souris", "ecran", "figurine", "boite", "nuages",
    "console", "casque", "balance",];
let input = document.getElementById("input");
let buttonVerify = document.getElementById("letterTry");
let divEssai = document.getElementById("essai");
let motRandom = mots[Math.floor(Math.random()*mots.length)];
let guessWord = document.getElementById("guessWord");
let answerTableau = [];
let historique = document.getElementById("proposition");
let essais = 6;
let messageJoueur = document.getElementById("message");
let img = document.getElementById('img');
img.src = "images/imgPrincipal.jpg";

divEssai.innerHTML = "essais restant " + essais;
console.log(motRandom);

for (let i = 0; i < motRandom.length; i++) {
    answerTableau[i] = "_";
    guessWord.innerHTML = answerTableau.join(" ");
}

buttonVerify.addEventListener("click", function () {
    let letter = input.value;
    let found = true;
    historique.innerHTML += "deja jouer : "+letter+ " / ";


    for (let i = 0; i < motRandom.length; i++) {
        if (motRandom[i] === letter) {
            answerTableau[i] = letter;
            guessWord.innerHTML = answerTableau.join(" ");
        }
        else if (!motRandom.includes(letter)) {
            found = false;
        }
    }
    if (!found) {
        essais--;
        divEssai.innerHTML = "essais restant " + essais;
        img.src += 'images/img'+ essais +'.jpg';
    }
    if (essais <= 0) {
        messageJoueur.innerHTML ="Perdu";
        messageJoueur.style.color = "red";
        alert("Le mot était : " + motRandom);

    }
    if (!answerTableau.includes("_")) {
        messageJoueur.innerHTML ="Gagné !";
        messageJoueur.style.color = "green";

    }
})