// Строитель - паттерн, порождает объекты. 
// Отделяет конструирование оъекта от его представления, так что в результате одного и того же процесса конструирования могут получаться разные представления.

class Burger {
  constructor(name, meatType, sale) {
    this.name = name;
    this.meatType = meatType;
    this.sale = sale;
    this.price = 10;
  }
}

class BurgerBuilder {
  constructor() {
    this.name;
    this.meatType;
    this.sale = false;
    this.price = 10;
  }  
  
  setName(name) {
    this.name = name;
    return this;
  };
  setMeatType(meatType) {
    this.meatType = meatType;
    return this;
  };
  setSale(sale) {
    this.sale = sale;
    this.price = this.price / 100 * (100 - sale);
    return this;
  };
  build() {
    return new Burger(this.name, this.meatType, this.sale);
  }
};

let burger = new BurgerBuilder()
  .setName('Classic burger')
  .setMeatType('beef')
  .setSale(15)
  .build();
console.log(burger);

/*--------------------------------------*/

function Burger(name, meatType, sale) {
  this.name = name;
  this.meatType = meatType;
  this.sale = sale;
  this.price = 10;
}

function BurgerBuilder() {
  this.name;
  this.meatType;
  this.sale = false;
  this.price = 10;
  
  return {
    setName: function(name) {
      this.name = name;
      return this;
    },
    setMeatType: function(meatType) {
      this.meatType = meatType;
      return this;
    },
    setSale: function (sale) {
      this.sale = sale;
      this.price = this.price / 100 * (100 - sale);
      return this;
    },
    build: function() {
      return new Burger(this.name, this.meatType, this.sale);
    }
  };
};

let burger = new BurgerBuilder()
  .setName('Classic burger')
  .setMeatType('beef')
  .setSale(15)
  .build();
console.log(burger);

//{
//  meatType: "beef",
//  name: "Classic burger",
//  price: 10,
//  sale: 15
//}