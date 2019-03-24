function Bike(id, make, model, price, isTandem, colors, shifterMake, shifterGears) {
    this.id = id;
    this.make = make;
    this.model = model;
    this.price = price;
    this.isTandem = isTandem;
    this.colors = colors;
    this.shifterMake = shifterMake,
    this.shifterGears = shifterGears
}

Bike.prototype = { 
    getId: function () {
        return this.id;
    },
    getMake: function () { 
        return this.make;
    }
}

Bike.prototype.getModel = function () {
    return this.model;
}

Bike.prototype.message = function () {
    console.log("Hello from bike.");
}

Bike.prototype.repaint = function(color) {
    this.color = color;
}

// ===========
function MountainBike(id, make, model, price, isTandem, colors, shifterMake, shifterGears, tires) {
    Bike.call(id, make, model, price, isTandem, colors, shifterMake, shifterGears);
    this.tires = tires;
}

MountainBike.prototype = Object.create(Bike.prototype);
MountainBike.prototype.constructor = MountainBike;

// extend
Circle.prototype.getTires = function () {
    return this.tires;
}

// instance
var aMountainBike = new MountainBike(4, "Daewoo", "A1", 200.0, false, ["pink, white"], "Daewoo", 4)
console.log(aMountainBike.getTires())
