/* 
    BIKE WITH INHERITANCE
*/

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



/* 
    REPOSITORY API
*/

var bikeRepository = (function () {

    var bikes = [
        new Bike(1, "Pinarello", "One", 500.0, false, ["red", "green"], { make: "Shimano", gears: 7 }),
        new Bike(2, "BMC", "X1", 2500.0, false, ["white", "black", "blue"], { make: "FSA", gears: 5 }),
        new Bike(3, "BMC", "X2", 2500.0, true, ["black"], { make: "FSA", gears: 3 })
    ];

    var addBike = function (newBike) {
        if (bikes.find(function(bike) { return bike.id == newBike.id }))
        {
            console.log("ERROR! Bike with this ID already exists.");
            return;
        }
        bikes.push(newBike);
    },

    return {

        getBikeById: function(id) {
            return bikes.find(function(bike) { return bike.id == id });
        },

        createBike: function(id, make, model, price, isTandem, colors, shifterMake, shifterGears) {
            var newBike = new Bike(id, make, model, price, isTandem, colors, shifterMake, shifterGears);
            addBike(newBike);
        },

        updateBike: function (id, newBike) {
            var bikeIndex = bikes.findIndex(function(bike) { return bike.id == id });
            if (bikeIndex == -1)
            {
                console.log("ERROR! Bike with this ID does not exists.");
                return;
            }
            bikes[bikeIndex] = newBike;
        },

        deleteBike: function (id) {
            var bikeIndex = bikes.findIndex(function(bike) { return bike.id == id }); 
            if (bikeIndex == -1)
            {
                console.log("ERROR! Bike with this ID does not exists.");
                return;
            }
            bikes.splice(bikeIndex, 1);
        }
    }

})