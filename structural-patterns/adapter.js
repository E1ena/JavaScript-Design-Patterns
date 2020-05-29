// Адаптер - паттерн, структурирует классы и объекты.
// Преобразовывает интерфейс одного класса в интерфейс другого, который ожидают клиенты.

class ZooKeeper {
  walkTheAnimal(animal) {
    return console.log(animal.walk());
  }
}

class Dog {
  constructor() {
    this.type = 'dog';
  }
  
  walk() {
    return `${this.type} runs`;
  }
}

class Fish {
  constructor() {
    this.type = 'fish';
  }
  
  swim() {
    return `${this.type} swims in an aquarium`;
  }
}

class FishAdapter {
  constructor(fish) {
    this.fish = fish;
  }
  
  walk() {
    const fishWalk = this.fish.swim();
    return `zookeer walks while ${fishWalk}`;
  }
}

const Jane = new ZooKeeper();
Jane.walkTheAnimal(new Dog()); // dog runs
Jane.walkTheAnimal(new FishAdapter(new Fish())); // zookeer walks while fish swims in an aquarium