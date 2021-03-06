// ### DATA ###

var bike1 = {
    id: 1,
    make: "Pinarello",
    model: "One",
    price: 500.0,
    isTandem: false,
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
    isTandem: false,
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
    isTandem: true,
    colors: ["black"],
    shifter: {
        make: "FSA",
        gears: 3
    }
}


// ### CRUD ###
var db = [bike1, bike2, bike3];

function createBike(id, make, model, price, isTandem, colors, shifterMake, shifterGears) {

    var newBike = {
        id: id,
        make: make,
        model: model,
        price: price,
        isTandem: isTandem,
        colors: colors,
        shifterMake: shifterMake,
        shifterGears: shifterGears
    };

    addBike(newBike);
}

function addBike(newBike) {

    if (db.find(function(bike) { return bike.id == newBike.id }))
    {
        console.log("ERROR! Bike with this ID already exists.");
        return;
    }

    db.push(newBike);
}

function getBikeById(id) {
    return db.find(function(bike) { return bike.id == id });
}

function getBikesByMake(make) {
    return db.filter(function(bike) { return bike.make == make });
}

function getBikesByModel(model) {
    return db.filter(function(bike) { return bike.model == model });
}

function getBikesByTandem(isTandem) {
    return db.filter(function(bike) { return bike.isTandem == isTandem });
}

function updateBike(id, newBike) {
    var bikeIndex = db.findIndex(function(bike) { return bike.id == id });

    if (bikeIndex == -1)
    {
        console.log("ERROR! Bike with this ID does not exists.");
        return;
    }

    db[bikeIndex] = newBike;
}

function deleteBike(id) {
    var bikeIndex = db.findIndex(function(bike) { return bike.id == id });

    if (bikeIndex == -1)
    {
        console.log("ERROR! Bike with this ID does not exists.");
        return;
    }

    db.splice(bikeIndex, 1);
}

function displayBikes() {

    db.forEach(printBike);

    function printBike(element, index, array) {
        console.log("#" + index + " " + element.make + " " + element.model);
    }
}


// ### TEST ### 

console.log("\n## INITIAL DATA ##");
console.log(db);

console.log("\n## GET BIKE WITH ID == 2 ##");
console.log(getBikeById(2));

console.log("\n## GET BIKES WITH MAKE == BMC ##");
console.log(getBikesByMake("BMC"));

console.log("\n## GET TANDEM BIKES");
console.log(getBikesByTandem(true));

console.log("\n## DELETE BIKE WITH ID == 3 ##");
deleteBike(3);
console.log(db);

console.log("\n## ADD NEW BIKE ##");
createBike(4, "Daewoo", "A1", 200.0, false, ["pink, white"], "Daewoo", 4);
console.log(db);

console.log("\n## ADD DUPLICATE BIKE ##");
createBike(4, "Daewoo", "A1", 200.0, false, ["pink, white"], "Daewoo", 4);

console.log("\n## UPDATE BIKE WITH ID == 1 ##")
updateBike(1, {
    id: 1,
    make: "Pinarello",
    model: "Two",
    price: 9999.0,
    isTandem: false,
    colors: ["black"],
    shifter: {
        make: "Shimano",
        gears: 8
    }
})
console.log(db);

console.log("\n## DISPLAY BIKES ##")
displayBikes();
