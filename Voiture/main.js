import Voiture from "./Voiture.js"

let voiture1 = new Voiture("Bmw","Serie 1",80);
let voiture2 = new Voiture("Mercedes","GLB",100)

voiture1.vitesse = Voiture.accelerer(voiture1.vitesse);
voiture1.vitesse = Voiture.accelerer(voiture1.vitesse);
voiture1.vitesse = Voiture.accelerer(voiture1.vitesse);

voiture2.vitesse = Voiture.accelerer(voiture2.vitesse);
voiture2.vitesse = Voiture.accelerer(voiture2.vitesse);
voiture2.vitesse = Voiture.ralentir(voiture2.vitesse);
voiture2.vitesse = Voiture.ralentir(voiture2.vitesse);

Voiture.compareVitesse(voiture1.vitesse,voiture2.vitesse);