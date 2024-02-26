// ESERCIZIO 1

class User {
  constructor(name, surname, age, location) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.location = location;
  }
  compare = function (userCompared) {
    if (this.age < userCompared.age) {
      return userCompared.name + " è più vecchio di " + this.name;
    } else if (this.age > userCompared.age) {
      return userCompared.name + " è più giovane di " + this.name;
    } else {
      return userCompared.name + " & " + this.name + " hanno la stessa età.";
    }
  };
}

user1 = new User("Luca", "Barbuto", 30, "Rende");
user2 = new User("Claudio", "Codispoti", 30, "Milano");
user3 = new User("Franceco", "Menniti", 32, "Roma");

console.log(user1.compare(user2));
console.log(user2.compare(user3));
console.log(user3.compare(user1));

// ESERCIZIO 2

// richiamo gli elementi del form
let userPetName = document.getElementById("petName");
let userOwnerName = document.getElementById("ownerName");
let userSpecies = document.getElementById("species");
let userBreed = document.getElementById("breed");

// richiamo "ul" dove inserire i risultati della compilazione e il pulsante per l'invio
let userData = document.getElementById("userData");
let btn = document.getElementById("button");

// creo un array vuoto come contenitore dove inserire i dati da mandare nel "ul"
let myPets = [];

// creo la classe con il constructor per la generazione di istanze dei pet
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  //   creo un metodo per verificare attraverso un booleano se gli animali hanno lo stesso proprietario
  sameOwner(pet) {
    if (this.ownerName === pet.ownerName) {
      console.log("Questi due animali hanno lo stesso proprietario");
      return true;
    } else {
      console.log("Questi due animali non hanno lo stesso proprietario");
      return false;
    }
  }
}

// creo una funzione per l'inserimento dei dati al'interno del tag "ul" con degli "li"
const dataResult = function () {
  userData.innerHTML = ""; /* svuoto la lista inizialmente */
  myPets.forEach((pet) => {
    const addLi = document.createElement("li");
    addLi.innerText =
      "Nome: " +
      pet.petName +
      " - Proprietario: " +
      pet.ownerName +
      " - Specie: " +
      pet.species +
      " - Razza: " +
      pet.breed +
      ".";
    userData.appendChild(addLi);
  });
};

// creo una funzione che scatena la generazione di un'istanza attravreso l'onclick
btn.onclick = function (e) {
  let newPet = new Pet(petName.value, ownerName.value, species.value, breed.value);
  myPets.push(newPet);
  dataResult();

  //   disattivo il reset di Default del Submit
  e.preventDefault();

  //   resetto i campi dopo l'invio del form
  petName.value = "";
  ownerName.value = "";
  species.value = "";
  breed.value = "";
};
