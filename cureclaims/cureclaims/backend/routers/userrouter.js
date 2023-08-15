// create App function
let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// User model
let UserSchema = require("../models/userinfo")

// CREATE User
router.post("/users", (req, res, next) => {
UserSchema.create(req.body, (error, data) => {
	if (error) {
	return next(error);
	} else {
	console.log(data);
	res.json(data);
	}
});
});

// READ User
router.get("/users", (req, res) => {
UserSchema.find((error, data) => {
	if (error) {
	return next(error);
	} else {
	res.json(data);
	}
});
});

// UPDATE user
router
.route("/users/:id")
// Get Single User
.get((req, res) => {
	UserSchema.findById(
		req.params.id, (error, data) => {
	if (error) {
		return next(error);
	} else {
		res.json(data);
	}
	});
})

// Update user Data
.put((req, res, next) => {
	UserSchema.findByIdAndUpdate(
	req.params.id,
	{
		$set: req.body,
	},
	(error, data) => {
		if (error) {
		return next(error);
		
		} else {
		res.json(data);
		console.log("User Sucessfully submitted");
		}
	}
	);
});

// Delete user
router.delete("/delete-users/:id",
(req, res, next) => {
UserSchema.findByIdAndRemove(
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
