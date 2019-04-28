import { Shifter } from 'shifter.js'

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