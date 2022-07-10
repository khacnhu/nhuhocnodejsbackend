const Course = require("F:/HOCNODEJS/src/model/Course.js")

const { mongooseObject } = require("../../util/mongoose.js")

class CoursesController {
    //GET COURSE DETAIL SLUG
    show (req, res, next) {
        Course.findOne({ "slug": req.params.slug})
        .then(course => {
                res.render("courses/show", {course: mongooseObject(course)})
                // console.log(mongooseObject(course))
            })
        .catch(next)
    }


    //GET DE VO TRANG TAO KHOA HOC MOI 
    create(req, res, next) {
        res.render("courses/create")
    }


    store(req, res, next){
        // const Tank = mongoose.model('Tank', yourSchema);/
        // const fomrData = req.body;
        // FormData.image = `https://files.fullstack.edu.vn/f8-prod/courses/${req.body.videoID}`

        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect("/"))
            .catch(next)

    }

}

module.exports = new CoursesController();
