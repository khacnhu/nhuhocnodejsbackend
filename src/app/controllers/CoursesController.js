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

    edit(req, res, next){
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {course: mongooseObject(course)}))
            .catch(next)
    }

    //PUT update id khoa hoc
    update(req, res, next){
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }


    //DELETE ID KHOA HOC
    destroy(req, res, next){    
        Course.delete({_id: req.params.id})
            .then(() => res.redirect("back"))
            .catch(next)
    }

    //PATCH RESTORE COURSES
    restore(req, res, next){
        Course.restore({_id: req.params.id})
            .then(() => res.redirect("back"))
            .catch(next)
    }

    //forceDelete Course (XOA VINH VIEN KHOA HOC)
    forceDestroy(req, res, next){
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect("back"))
            .catch(next)
    }

    //POST handlerform course (nop khoa hoc o nut submit vs ô option xóa của chọn hành đống)
    handleFormAction(req, res, next){
        switch (req.body.action){
            case "delete":
                Course.delete({_id: {$in : req.body.courseIds}})
                    .then(() => res.redirect("back"))
                    .catch(next)
                break;
            case "":
                res.send("Moi ban nhap lai hanh dong can lam")
                break;
            default:
                res.json({message: 'da xay ra loi roi'})
        }       
    }

}

module.exports = new CoursesController();
