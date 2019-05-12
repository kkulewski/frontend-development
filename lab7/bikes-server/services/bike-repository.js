var Bike = require('../models/bike.js')

module.exports = class BikeRepository {

    constructor() {
        this.bikes = [
            new Bike(1, "Pinarello", "One", 500.0, false, ["red", "green"]),
            new Bike(2, "BMC", "X1", 2500.0, false, ["white", "black", "blue"]),
            new Bike(3, "BMC", "X2", 2500.0, true, ["black"])
        ];
    }

    add(newBike) {
        if (this.bikes.find(bike => bike.id === newBike.id)) {
            return `ERROR! Bike with ID: ${newBike.id} already exists.`;
        }
        this.bikes.push(newBike);
        return `Bike with ID: ${newBike.id} added.`;
    }

    getById(id) {
        return this.bikes.find(bike => bike.id === id);
    }

    getAll() {
        return this.bikes;
    }

    update(id, newBike) {
        let bikeIndex = this.bikes.findIndex(bike => bike.id === id);
        if (bikeIndex === -1) {
            return `ERROR! Bike with ID: ${id} does not exists.`;
        }
        this.bikes[bikeIndex] = newBike;
        return `Bike with ID: ${id} updated.`;
    }

    delete(id) {
        var bikeIndex = this.bikes.findIndex(bike => bike.id === id); 
        if (bikeIndex === -1) {
            return `ERROR! Bike with ID: ${id} does not exists.`;
        }
        this.bikes.splice(bikeIndex, 1);
        return `Bike with ID: ${id} deleted.`;
    }

}
