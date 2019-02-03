
function Phone(brand, price, color) {
  this.brand = brand;
  this.price = price;
  this.color = color;
};

Phone.prototype.printInfo = function() {
  console.log("the phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price);
};

var iPhone6S = new Phone("Apple", 2250, "black");
var GalaxyS6 = new Phone('Samsung', 2150, 'silver');
var OnePlus = new Phone('One', 1500, 'black');

iPhone6S.printInfo();
GalaxyS6.printInfo();
OnePlus.printInfo();