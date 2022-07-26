class Chien{
    static count = 0;
    constructor(nom,race,age){
        this.id = ++Chien.count;
        this.nom = nom;
        this.race = race;
        this.age = age 
    }
} 

function envoiReponse(nom,race,age){
 let stock = [nom.value,race.value,age.value]
 let newDog = new Chien(stock[0],stock[1],stock[2]);
 chiens.push(newDog)
 for(let i=0;i<chiens.length;i++){
    
 }
}

let bernie = new Chien("bernie","basset",14);
let rex = new Chien("rex","berger allemand",36);

let chiens = [bernie,rex];
let test;
let listDog = document.getElementById("listDog")

listDog.innerHTML=`<li> ${bernie.id} ${bernie.nom} ${bernie.race} ${bernie.age} </li>
                   <li> ${rex.id} ${rex.nom} ${rex.race} ${rex.age} </li>`