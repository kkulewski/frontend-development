import { Bike } from '../models/bike.jsx';

export class BikeRepository {

    constructor() {
        this.bikes = [
            new Bike(1, "Pinarello", "One", 500.0, false, ["red", "green"]),
            new Bike(2, "BMC", "X1", 2500.0, false, ["white", "black", "blue"]),
            new Bike(3, "BMC", "X2", 2500.0, true, ["black"])
        ];
    }

    add(newBike) {
        if (this.bikes.find(bike => bike.id === newBike.id)) {
            console.log(`ERROR! Bike with ID: ${newBike.id} already exists.`);
            return;
        }
        this.bikes.push(newBike);
    }

    create(id, make, model, price, isTandem, colors) {
        let newBike = new Bike(id, make, model, price, isTandem, colors);
        this.add(newBike);
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
            console.log(`ERROR! Bike with ID: ${id} does not exists.`);
            return;
        }
        this.bikes[bikeIndex] = newBike;
    }

    delete(id) {
        var bikeIndex = this.bikes.findIndex(bike => bike.id === id); 
        if (bikeIndex === -1) {
            console.log(`ERROR! Bike with ID: ${id} does not exists.`);
            return;
        }
        this.bikes.splice(bikeIndex, 1);
    }

}
