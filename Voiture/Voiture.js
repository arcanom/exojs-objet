export default class Voiture {
    constructor(name,type,vitesse){
        this.name = name;
        this.type = type;
        this.vitesse = vitesse 
    }
    static accelerer(vitesse){
         return vitesse+10
        
    }
    static ralentir(vitesse){
        return vitesse - 5
    }

    static compareVitesse(vitesse1,vitesse2){
        if(vitesse1 > vitesse2){
            console.log(`la Voiture 1 est plus rapide`)
            console.log(`la Voiture 1: ${vitesse1} km/h`)
            console.log(`la Voiture 2: ${vitesse2} km/h`)
        } else if (vitesse2 > vitesse1){
            console.log(`La voiture 2 est plus rapide` )
            console.log(`la Voiture 1: ${vitesse1} km/h `)
            console.log(`la Voiture 2: ${vitesse2}`)
        } else {
            console.log(`Les deux voiture ont la même vitesse`)
            console.log(`la Voiture 1: ${vitesse1} km/h`)
            console.log(`la Voiture 2: ${vitesse2} km/h`)
        }
    }
}