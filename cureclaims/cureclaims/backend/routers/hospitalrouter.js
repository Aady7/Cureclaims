//create App function
let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Hospital  model
let HospitalSchema = require("../models/hospital")

// CREATE Hospital
router.post("/", (req, res, next) => {
    HospitalSchema.create(req.body, (error, data) => {
	if (error) {
	return next(error);
	} else {
	console.log(data);
	res.json(data);
	}
});
});

// READ Hospital
router.get("/", (req, res) => {
    HospitalSchema.find((error, data) => {
	if (error) {
	return next(error);
	} else {
	res.json(data);
	}
});
});

// UPDATE Hospital
router
.route("/:id")
// Get Single Hospital
.get((req, res) => {
	HospitalSchema.findById(
		req.params.id, (error, data) => {
	if (error) {
		return next(error);
	} else {
		res.json(data);
	}
	});
})

// Update Hospital Data
.put((req, res, next) => {
	HospitalSchema.findByIdAndUpdate(
	req.params.id,
	{
		$set: req.body,
	},
	(error, data) => {
		if (error) {
		return next(error);
		
		} else {
		res.json(data);
		console.log("Hospital Sucessfully submitted");
		}
	}
	);
});

// Delete Hospital
router.delete("/delete-users/:id",
(req, res, next) => {
    HospitalSchema.findByIdAndRemove(
	req.params.id, (error, data) => {
	if (error) {
	return next(error);
	} else {
	res.status(200).json({
		msg: data,
	});
	}
});
});

module.exports = router;
