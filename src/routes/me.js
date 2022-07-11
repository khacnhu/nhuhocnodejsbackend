const express = require("express");
const router = express.Router();

const meController = require('../app/controllers/meController');

router.get("/stored/courses", meController.storedCourses);


module.exports = router;









