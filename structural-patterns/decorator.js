// Декоратор - паттрен, структурирует объекты.
// Динамически добавляет объекту новые обязанности на лету (сохраняя неизменным интерфейс),
// оборачивая его в объект-обертку.
// Альтернатива созданию многочисленных подклассов.

class Horse {
  constructor(name) {
    this.name = name;
  }
  
  run() {
    return console.log(`I'm ${this.name} and I'm so fast!`);
  }
}

class Unicorn {
  constructor(horse, horn) {
    this.horse = horse;
    this.horn = horn;
  }
  
  run() {
    this.horse.run();
    this._showHorn();
  }
  
  _showHorn() {
    return console.log(`My horn is ${this.horn} long`);
  }  
}

class Pegasus {
  constructor(horse) {
    this.horse = horse;
    this.wings = 'white and beautiful';
  }
  
  run() {
    this.horse.run();
    this._showWings();
  }
  
  _showWings() {
    return console.log(`I have ${this.wings} wings`)
  }
}

class Alicorn {
  constructor(horse, horn) {
    this.horse = horse;
    this.horn = new Unicorn(this.horse, horn).horn;
    this.wings = new Pegasus(this.horse).wings;
  }
  
  run() {
    this.horse.run();
    this._showWingsAndHorn();
  }
  
  _showWingsAndHorn() {
    return console.log(`I have ${this.wings} wings and my horn is ${this.horn} long`)
  }
}

const horse = new Horse('horse Jane');
horse.run(); // I'm horse Jane and I'm so fast!

const unicorn = new Unicorn(new Horse('unicorn Jane'), '1.5m');
unicorn.run(); // I'm unicorn Jane and I'm so fast! My horn is 1.5m long

const pegasus = new Pegasus(new Horse('pegasus Jane'));
pegasus.run(); // I'm pegasus Jane and I'm so fast! I have white and beautiful wings

const alicorn = new Alicorn(new Horse('alicorn Jane'), '2m')
alicorn.run(); // I'm alicorn Jane and I'm so fast! I have white and beautiful wings and my horn is 2m long