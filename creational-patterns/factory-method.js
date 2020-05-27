// Фабричный метод - паттерн, порождает классы.
// Возвращает экземпляр подходящего класса.

class Dog{
  constructor(name) {
    this.name = name;
  }
  say() {
    return console.log(`I'm a dog named ${this.name} , bark`)
  }
}
class Cat {
  constructor(name) {
    this.name = name;
  }
  say() {
    return console.log(`I'm a cat named ${this.name}, meaw`)
  }
}
class PetCreator {
  create(pet, name) {
    switch (pet) {
      case 'dog':
        return new Dog(name);
        break;
      case 'cat': 
        return new Cat(name);
        break;
    }
  }
}

const petFactory = new PetCreator();
const bobsPet = petFactory.create('cat', 'Snow');
const janesPet = petFactory.create('dog', 'Storm');
bobsPet.say(); // "I'm a cat named Snow, meaw"
janesPet.say(); // "I'm a dog named Storm , bark"

/*--------------------------------------*/

function Dog(name) {
  this.type = 'dog';
  this.name = name;  
}

function Cat(name) {
  this.type = 'cat';
  this.name = name;  
}

function PetFactory() {
  this.create = (name, type) => {
    switch(type) {
      case 'dog':
        return new Dog(name);
        break;
      case 'cat':
        return new Cat(name);
        break;
    }
  }
}

function say() {
  console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
}

const petFactory = new PetFactory()
const pets = [];

pets.push(petFactory.create('Storm', 'dog'));
pets.push(petFactory.create('Snow', 'cat'));

pets.forEach(pet => say.call(pet));