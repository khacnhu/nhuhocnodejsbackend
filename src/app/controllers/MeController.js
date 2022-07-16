const Course = require("F:/HOCNODEJS/src/model/Course.js")

const { multiMongooseToObject } = require("../../util/mongoose.js")

class MeController {

    
    
    
    // GET /
    storedCourses(req, res, next){

        Promise.all([Course.find({}), Course.countDocumentsDeleted({})])
            .then(([courses, deleteCourses]) => res.render('me/stored-courses', {
                deleteCourses: deleteCourses,
                courses: multiMongooseToObject(courses)
            })  )
            .catch(next);

        // Course.countDocumentsDeleted({})
        //     .then(deleteCourse => console.log(deleteCourse))
        //     .catch(next)

        // Course.find({})

        //     .then(courses => res.render('me/stored-courses', {
        //         courses: multiMongooseToObject(courses)
        //     }))
        //     .catch(next)
    }

    trashCourses(req, res, next){
        Course.findDeleted  ({})

            .then(courses => res.render('me/trash-courses', {
                courses: multiMongooseToObject(courses)
            }))
            .catch(next)
    }

}   

module.exports = new MeController;









