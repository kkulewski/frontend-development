/*
    BIKE WITH INHERITANCE
*/

class Shifter {

    constructor(make, gears) {
        this.make = make,
        this.gears = gears
    }

}

class Bike {
    constructor(id, make, model, price, isTandem, colors, shifter) {
        this._id = id,
        this.make = make,
        this.model = model,
        this.price = price,
        this.isTandem = isTandem,
        this.colors = colors,
        this.shifter = shifter
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

var mtb = new MountainBike(
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