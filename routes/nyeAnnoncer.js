const express = require('express');
const router = express.Router();
const db = require('../Database/db');
const { User, Advert, Car } = db; //import the entire db module and then destructure it to get the User, Advert, and Car models. This is the same as doing const User = db.User, const Advert = db.Advert, etc.
const FilteredApiService = require('../services/FilteredApiService.js');
const ApiService = require('../services/ApiService.js');
const apiService = new ApiService('https://api.nrpla.de', 'xptQbIKH1AyItGP0TCiv8BcIo3rFHiIyA7GI3QdOESidtD0oJeSDPbEyRzqL5mlc');
const filteredApiService = new FilteredApiService(apiService);

// POST route for "nyeAnnoncer" view
router.post('/', async (req, res) => {
    try {
        const userid = req.session.userID;
        if (!userid) {
            return res.redirect('/login');
        }

        const user = await User.findOne({
            where: { id: userid },
            attributes: ['email', 'phone', 'city']
        });

        const action = req.body.action;

        if (action === 'fetchVehicleData') {
            let registration = req.body.registration;

            if (registration && user) {
                filteredApiService.makeRequest(registration).then(vehicleData => {
                    req.session.vehicleData = vehicleData;
                    req.session.registration = registration; // Store registration in session
                    res.render('nyeAnnoncer', { kontaktInfo: user, vehicleData: vehicleData });
                }).catch(error => {
                    console.error('Failed to fetch vehicle data:', error);
                    res.status(500).send('Failed to fetch vehicle data');
                });
            } else {
                res.status(400).send('Registration and user authentication are required');
            }
        } 
        // Inside your POST route
            else if (action === 'createAdvert') {
                const { price, description, model, brand } = req.body;
                const licencePlate = req.session.registration; // Retrieve licencePlate from session

                console.log("Licence Plate from session:", licencePlate); // Log the licence plate

                // Check if the car exists
                const car = await Car.findOne({ where: { licencePlate: licencePlate } });
                if (!car) {
                    console.log("Car not found for licence plate:", licencePlate); // Log if car not found
                    return res.status(400).send('No car found with the provided licence plate');
                }

                // If the car exists, create the advert
                await Advert.create({
                    userID: userID, // Make sure this userID exists in the User table
                    licencePlate: licencePlate,
                    description: description,
                    model: model,
                    manufacture: brand,
                    price: price
                });

                // Clear the stored data after use
                delete req.session.registration;

                res.redirect('/minside');
            } else {
                res.status(400).send('Vehicle registration and data are required');
        }
    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).send('Internal server error');
    }
});


router.get('/', async (req, res) => {
    try {
        const userID = req.session.userID;
        if (!userID) {
            return res.redirect('/login');
        }

        const user = await User.findOne({
            where: { id: userID },
            attributes: ['email', 'phone', 'city']
        });

        if (user) {
            res.render('nyeAnnoncer', { kontaktInfo: user });
        } else {
            res.redirect('/login');
        }
    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;
