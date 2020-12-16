// mes variables

let motCacher =document.getElementById("mot");


// je deffini un tableau avec les mots a trouver

let mots = ["valise", "tasse", "tableaux", "voiture", "ordinateur", "bureau", "pantalon", "jardin", "maison",
            "cendrier", "lampe", "tomate", "raisin", "pizza", "formation", "informatique", "fauteuil",
            "escalier", "telephone", "pomme", "furet", "chat", "chien", "poule", "couverture", "cigarette"];

//je selectionne un des mots aleatoirement

let randomot = mots[Math.floor(Math.random() * mots.length)];
console.log(randomot)

//je trnsmet le mot random dans mon espace mot a trouver


// je recupere la touches proposer par l' utilisateur

//je verifie si la lettre et dans le mot a trouver

//si oui je l' affiche dans le mots si non envoie d' un message pour l 'utilisateur