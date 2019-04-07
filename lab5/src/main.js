/*
    BIKE WITH INHERITANCE
*/

class Shifter {

    constructor(make, gears) {
        this._make = make,
        this._gears = gears
    }

    get make() {
        return this._make;
    }

    set make(value) {
        this._make = value;
    }

    get gears() {
        return this._gears;
    }

    set gears(gears) {
        this._gears = gears;
    }

}

class Bike {
    constructor(id, make, model, price, isTandem, colors, shifter) {
        this._id = id,
        this._make = make,
        this._model = model,
        this._price = price,
        this._isTandem = isTandem,
        this._colors = colors,
        this._shifter = shifter
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get make() {
        return this._make;
    }

    set make(value) {
        this._make = value;
    }
}


class MountainBike extends Bike {

    constructor(id, make, model, price, isTandem, colors, shifter, tires) {
        super(id, make, model, price, isTandem, colors, shifter);
        this._tires = tires;
    }

    get tires() {
        return this._tires;
    }

    set tires(value) {
        this._tires = value;
    }

}

let mtb = new MountainBike(
    4,
    "Daewoo",
    "A1",
    200.0,
    false,
    ["pink, white"],
    new Shifter("Shimano", 5),
    "Pirelli"
);

console.log(mtb.tires);



/*
    REPOSITORY API
*/

class BikeRepository { 

    constructor() {
        this._bikes = [
            new Bike(1, "Pinarello", "One", 500.0, false, ["red", "green"], new Shifter("Shimano", 7)),
            new Bike(2, "BMC", "X1", 2500.0, false, ["white", "black", "blue"], new Shifter("FSA", 5)),
            new Bike(3, "BMC", "X2", 2500.0, true, ["black"], new Shifter("FSA", 3))
        ];
    }

    add(newBike) {
        if (this._bikes.find(bike => bike.id == newBike.id)) {
            console.log(`ERROR! Bike with ID: ${newBike.id} already exists.`);
            return;
        }
        this._bikes.push(newBike);
    }

    create(id, make, model, price, isTandem, colors, shifter) {
        let newBike = new Bike(id, make, model, price, isTandem, colors, shifter);
        this.add(newBike);
    }

    getById(id) {
        return this._bikes.find(bike => bike.id == id);
    }

    getAll() {
        return this._bikes;
    }

    update(id, newBike) {
        let bikeIndex = _bikes.findIndex(bike => bike.id == id);
        if (bikeIndex == -1) {
            console.log(`ERROR! Bike with ID: ${id} does not exists.`);
            return;
        }
        this._bikes[bikeIndex] = newBike;
    }

    delete(id) {
        var bikeIndex = this._bikes.findIndex(bike => bike.id == id); 
        if (bikeIndex == -1) {
            console.log(`ERROR! Bike with ID: ${id} does not exists.`);
            return;
        }
        this._bikes.splice(bikeIndex, 1);
    }

}



/*
    TESTS
*/

let bikeRepository = new BikeRepository();

console.log("\n## GET BIKE WITH ID = 2");
let someBike = bikeRepository.getById(2);
console.log(someBike);

console.log("\n## CREATE NEW BIKE AND FETCH IT");
let shifter = new Shifter("Shimano", 6)
bikeRepository.create(6, "BMC", "Model1", 900.00, false, ["white", "red"], shifter);
let createdBike = bikeRepository.getById(6);
console.log(createdBike);

console.log("\n## CREATE DUPLICATE BIKE");
bikeRepository.create(6, "BMC", "Model1", 900.00, false, ["white", "red"], shifter);

console.log("\n## GET ALL BIKES");
let allBikes = bikeRepository.getAll();
console.log(allBikes);
