// Компоновщик - паттерн, структурирующий объекты.
// Компонует объекты в древовидные структуры.

class Order {
  constructor(title) {
    if (new.target === Order) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
    this.title = title;
    this._price = null;
  }
  
  set price(price) {
    this._price = price;
  }  
  get price() {
    return this._price;
  }
  set addItem(buy) {}
  removeItem(buy) {}
}

class Buy extends Order {
  constructor(title) {
    super(title);
  }
}

class Box extends Order {
  constructor(title) {
    super(title);
    this.items = [];
  }
  
  get price() {
    return this.items.reduce((accumulator, item) => {
      return accumulator + item.price
    }, 0);
  }
  
  set addItem(buy) {
    this.items.push(buy);
  }
  removeItem(buy) {
    this.items = this.items.filter(item => item !== buy);
  }
}

const book = new Buy('book');
book.price = 1500;

const cake = new Buy('cake');
cake.price = 500;

const box = new Box();
box.addItem = book; 
box.addItem = cake;
console.log(box.price); // 2000