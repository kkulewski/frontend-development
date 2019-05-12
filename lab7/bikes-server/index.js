var BikeRepository = require('../bikes-server/services/bike-repository.js')

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;
app.use(bodyParser.json());

var bikeRepository = new BikeRepository();

app.get('/', (req, res) => res.send('Bike-Server listening...'));
app.get('/api', (req, res) => res.send('Bike-Server listening...'));

app.get('/api/bike', (req, res) => {
    const bikes = bikeRepository.getAll();
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(bikes, null, 4));
});

app.get('/api/bike/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const bike = bikeRepository.getById(id);
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(bike, null, 4));
});

app.post('/api/bike', (req, res) => {
    const bike = req.body;
    bikeRepository.add(bike);
    res.send({"message":"bike added"});
});

app.put('/api/bike/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const newBike = req.body;
    bikeRepository.update(id, newBike);
    res.send({"message":"bike updated"});
})

app.delete('/api/bike/:id', (req, res) => {
    const id = parseInt(req.params.id);
    bikeRepository.delete(id);
    res.send({"message":"bike deleted"});
});

app.listen(port, () => console.log("Bike-Server listening on port " + port));
