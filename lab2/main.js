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

    if (db.find(x => x.id == id))
    {
        console.log("ERROR! Bike with this ID already exists.");
        return;
    }

    db.push(newBike);
}

function getBikeById(id) {
    return db.find(x => x.id == id);
}

function getBikesByMake(make) {
    return db.filter(x => x.make == make);
}

function getBikesByModel(model) {
    return db.filter(x => x.model == model);
}

function getBikesByTandem(isTandem) {
    return db.filter(x => x.tandem == isTandem);
}

function updateBike(id, newBike) {
    var bikeIndex = db.findIndex(x => x.id == id);
    db[bikeIndex] = newBike;
}

function deleteBike(id) {
    var bikeIndex = db.findIndex(x => x.id == id);
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
    tandem: false,
    colors: ["black"],
    shifter: {
        make: "Shimano",
        gears: 8
    }
})
console.log(db);

console.log("\n## DISPLAY BIKES ##")
displayBikes();
