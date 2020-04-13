var express = require("express");
var router = express.Router();
const { endpoint } = require("../config");
var axios = require("axios");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.send({
		status: "ok",
	});
});

/* GET users listing. */
router.get("/logout", function (req, res, next) {
	endpoint.others.forEach((ele) => {
		axios
			.get(ele)
			.then((response) => {})
			.catch((error) => {
				console.log(error);
			})
			.then(() => {
				res.redirect(endpoint.base);
			});
	});
});

module.exports = router;
