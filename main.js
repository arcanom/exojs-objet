let persons = [{
    id:1,
    name: "susan smith",
    job:"web developer",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:"Développeur web diplômé d’une LP métiers de l’informatique ayant travaillé plus d’un an en tant qu’alternant puis employé d’une grande entreprise de sous-traitance de programmation web. Je souhaite évoluer dans votre entreprise et travailler sur vos projets dans le domaine de la course automobile car c’est ce qui me passionne",
},
{
    id:2,
    name:"anna johnson",
    job:"web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:"Développeur full stack certifié Scrum, avec plus de 2 ans d’expérience. Mordu d’informatique, j’ai appris à coder dès mon plus jeune âge dans divers langages informatiques (Javascript, PHP, AngularJS...) et ai créé des projets personnels, dont un site référençant les vidéos les plus vues sur la plateforme Twitch (+ 5000 visites/mois).",
    
},
{
    id:3,
    name:"Abdallah Jones",
    job:"Web Developper",
    img:
    "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
    "Hello, je m'appelle Abdallah. J'aime le sport, les series et les animaux. Je suis développeur depuis plus de 10 ans.J'apprécie particulièrement le javascript et le Java. Je cherche actuellement une nouvelle opportunité pro",
},
{
    id:4,
    name:"bill anderson",
    job:"the boss",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
}];

function randomPerson(){
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    let anotherPerson = persons.find( test => test.id ==  randomNumber);
  
    namePerson.textContent = anotherPerson.name;
    img.setAttribute("src",anotherPerson.img);
    job.textContent = anotherPerson.job
    text.textContent =  anotherPerson.text

}

function nextPerson(){
let next = person.id+1;
if(next = 5){
    person = persons.find( person => person.id == 1);
    namePerson.textContent = person.name;
    img.setAttribute("src",person.img);
    job.textContent = person.job
    text.textContent =  person.text
} else if(next <5 && next != 0){
    person = persons.find( person => person.id == next);
    namePerson.textContent = person.name;
    img.setAttribute("src",person.img);
    job.textContent = person.job
    text.textContent =  person.text
}
}
function undoPerson(){
    let undo = persons-1
    if(undo = 0){
    person = persons.find( person => person.id == 4);
    namePerson.textContent = person.name;
    img.setAttribute("src",person.img);
    job.textContent = person.job
    text.textContent =  person.text
    } else if(undo > 0 && undo <=4){
    person = persons.find( person => person.id == undo);
    namePerson.textContent = person.name;
    img.setAttribute("src",person.img);
    job.textContent = person.job
    text.textContent =  person.text
    }
}

let person = persons.find( person => person.id == 1);
let img = document.getElementById("img");
let namePerson = document.getElementById("name");
let job = document.getElementById("job")
let text = document.getElementById("text")


namePerson.textContent = person.name;
img.setAttribute("src",person.img);
job.textContent = person.job
text.textContent =  person.text

