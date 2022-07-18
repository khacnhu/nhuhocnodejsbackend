const express = require("express");
const router = express.Router();

const meController = require('../app/controllers/meController');


router.get("/trash/courses", meController.trashCourses)

// router.get("/edit/couurses", meController.editCourses)
router.get("/stored/courses", meController.storedCourses);




module.exports = router;









