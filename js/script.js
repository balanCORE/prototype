
function Phone(brand, price, color, shape) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.shape = shape;
};

Phone.prototype.printInfo = function() {
  console.log("the phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price);
};

var iPhone6S = new Phone("Apple", 2250, "black", 'oval');
var GalaxyS6 = new Phone('Samsung', 2150, 'silver', 'triangle');
var OnePlus = new Phone('One', 1500, 'black', 'rectangle');
var oPPo = new Phone('opPO', 1000, 'yellow', 'diamond');


iPhone6S.printInfo();
GalaxyS6.printInfo();
OnePlus.printInfo();