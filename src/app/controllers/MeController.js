const Course = require("F:/HOCNODEJS/src/model/Course.js")

const { multiMongooseToObject } = require("../../util/mongoose.js")

class MeController {
    // GET /
    storedCourses(req, res, next){
        Course.find({})

            .then(courses => res.render('me/stored-courses', {
                courses: multiMongooseToObject(courses)
            }))
            .catch(next)
    }

    trashCourses(req, res, next){
        Course.findDeleted({})

            .then(courses => res.render('me/trash-courses', {
                courses: multiMongooseToObject(courses)
            }))
            .catch(next)
    }

}   

module.exports = new MeController;









