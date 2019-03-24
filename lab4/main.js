/* 
    BIKE WITH INHERITANCE
*/

function Shifter(make, gears) {
    this.make = make;
    this.gears = gears;
};

function Bike(id, make, model, price, isTandem, colors, shifter) {
    this.id = id;
    this.make = make;
    this.model = model;
    this.price = price;
    this.isTandem = isTandem;
    this.colors = colors;
    this.shifter = shifter;
};

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
function MountainBike(id, make, model, price, isTandem, colors, shifter, tires) {
    Bike.call(id, make, model, price, isTandem, colors, shifter);
    this.tires = tires;
}

MountainBike.prototype = Object.create(Bike.prototype);
MountainBike.prototype.constructor = MountainBike;

// extend
MountainBike.prototype.getTires = function () {
    return this.tires;
}

// instance
var aMountainBike = new MountainBike(
    4,
    "Daewoo",
    "A1",
    200.0,
    false,
    ["pink, white"],
    "Daewoo",
    new Shifter("Shimano", 5),
    "Pirelli"
);

console.log(aMountainBike.getTires())



/* 
    REPOSITORY API
*/

var bikeRepository = (function () {

    var bikes = [
        new Bike(1, "Pinarello", "One", 500.0, false, ["red", "green"], new Shifter("Shimano", 7)),
        new Bike(2, "BMC", "X1", 2500.0, false, ["white", "black", "blue"], new Shifter("FSA", 5)),
        new Bike(3, "BMC", "X2", 2500.0, true, ["black"], new Shifter("FSA", 3))
    ];

    var addBike = function (newBike) {
        if (bikes.find(function(bike) { return bike.id == newBike.id }))
        {
            console.log("ERROR! Bike with this ID already exists.");
            return;
        }
        bikes.push(newBike);
    };

    return {

        getBikeById: function(id) {
            return bikes.find(function(bike) { return bike.id == id });
        },

        createBike: function(id, make, model, price, isTandem, colors, shifterMake, shifterGears) {
            var newBike = new Bike(id, make, model, price, isTandem, colors, new Shifter(shifterMake, shifterGears));
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

})();

var someBike = bikeRepository.getBikeById(2);
console.log("## GET BIKE WITH ID = 2");
console.log(someBike);
