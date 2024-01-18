const color = "red";

// initialisation de l'objet
const car = {
    color: "red", // propriété : valeur attachée à un objet
    fuel: "electric", // propriété : valeur attachée à un objet
    start() {
        // méthode : fonction attachée à un objet
        console.log("Vroooom");
    },
};

// appel de la methode start

car.start();
