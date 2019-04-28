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