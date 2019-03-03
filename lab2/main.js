// ### DATA ###

var bike1 = {
    id: 1,
    make: "Pinarello",
    model: "One",
    price: 500.0,
    tandem: false,
    colors: ["red", "green"],
    shifter: {
        make: "Shimano",
        gears: 7 
    }
}

var bike2 = {
    id: 2,
    make: "BMC",
    model: "X1",
    price: 2500.0,
    tandem: false,
    colors: ["white", "black", "blue"],
    shifter: {
        make: "FSA",
        gears: 5
    }
}

var bike3 = {
    id: 3,
    make: "BMC",
    model: "X2",
    price: 2500.0,
    tandem: true,
    colors: ["black"],
    shifter: {
        make: "FSA",
        gears: 3
    }
}


// ### CRUD ###
var db = [bike1, bike2, bike3];

function createBike(id, make, model, price, tandem, colors, shifterMake, shifterGears) {
    var newBike = {
        id: id,
        make: make,
        model: model,
        price: price,
        colors: colors,
        shifterMake: shifterMake,
        shifterGears: shifterGears
    };

    addBike(newBike);
}

function addBike(bike) {

    if (db.find(x => x.id == bike.id))
    {
        console.log("ERROR! Bike with this ID already exists.");
        return;
    }

    db.push(bike);
}

function getBikeById(id) {
    return db.find(x => x.id == id);
}

function getBikeByMake(make) {
    return db.filter(x => x.make == make);
}

function deleteBike(id) {
    var bikeIndex = db.findIndex(x => x.id == id);
    db.splice(bikeIndex, 1);
}

function updateBike(id, newBike) {
    var bikeIndex = db.findIndex(x => x.id == id);
    db[bikeIndex] = newBike;
}

function displayBikes() {

    db.forEach(printBike);

    function printBike(element, index, array) {
        console.log("#" + index + " " + element.make + " " + element.model);
    }
}
