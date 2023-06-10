const express = require("express");
const vehiclesControllers = require("../controllers/vehicles")

const router = express.Router();

// Get all vehicles
router.get("/vehicles", vehiclesControllers.list)

// Get one vehicle by id
router.get("/vehicles/vehicle/:id", vehiclesControllers.show);

// Create a vehicle
router.post("/vehicles", vehiclesControllers.create);

module.exports = router;