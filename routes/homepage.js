const { Router } = require("express");
const router = Router();

const { getFilms } = require("../controllers/homepage");
const { verifyToken } = require('../middleware/verify-token');

router.get("/getfilms/:keyword/:type/:year", verifyToken, getFilms);

module.exports = router;
