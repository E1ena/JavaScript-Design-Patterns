// Прототип — паттерн, порождает объекты.
// Назначение: создавать копии экземпляра-прототипа, не вдаваясь в подробности их реализации.

class Door {
  constructor(doorParams = {material: 'wooden', widht: 1500, height: 2000}) {
    this.material = doorParams.material;
    this.widht = doorParams.widht;
    this.height = doorParams.height;
  }
  
  clone(door) {
    return new Door(this);
  }
}

const doorPrototype = new Door({material: 'oak', widht: 1750, height: 2000});
const interiorDoor1 = doorPrototype.clone();
const interiorDoor2 = doorPrototype.clone();
const interiorDoor3 = doorPrototype.clone();

/*--------------------------------------*/

function DoorPrototype(proto) {
  this.prototype = proto;
  
  this.clone = function () {
    let door = new Door();    
    door.material = this.prototype.material;
    door.widht = this.prototype.widht;
    door.height = this.prototype.height;    
    return door;
  };
}

function Door(material, widht, height) {  
  this.material = material;
  this.widht = widht;
  this.height = height;
  
  this.viewOrder = function () {
    return console.log(`Заказ клиента: материал двери ${this.material}, размеры: ${this.widht} x ${this.height}`);
  };
}


const door = new Door('oak', 1750, 2000);
const doorPrototype = new DoorPrototype(door);
const interiorDoor = doorPrototype.clone();
interiorDoor.viewOrder(); // "Заказ клиента: материал двери oak, размеры: 1750 x 2000"