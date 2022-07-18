const Course = require("F:/HOCNODEJS/src/model/Course.js")

const { multiMongooseToObject } = require("../../util/mongoose.js");
const CoursesController = require("./CoursesController.js");
// const { query } = require("express");
// const { destroy } = require("./CoursesController.js");

class MeController {
     
    // GET /
    storedCourses(req, res, next){      
        // let courseQuery = Course.find({})

        // Check xem co gia tri sort trong data khong de sort

        // const isValidType = ["asc", "desc"].includes(req.query.type)
        // if (req.query.hasOwnProperty("_sort")){
        //     courseQuery = courseQuery.sort({[req.query.column]: isValidType ? req.query.type: "desc"})
        // }

        Promise.all([Course.find({}).sortable(req), Course.countDocumentsDeleted({})])
            .then(([courses, deleteCourses]) => res.render('me/stored-courses', {
                deleteCourses: deleteCourses,
                courses: multiMongooseToObject(courses)
            })  )
            .catch(next);

        
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









