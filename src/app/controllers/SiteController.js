const Course = require("F:/HOCNODEJS/src/model/Course.js")

const { multiMongooseToObject } = require("../../util/mongoose.js")

class SiteController {

    // GET /
    index(req, res, next) {
        // Course.find({}, function(err, courses){
        //     if(!err) {
        //         res.json(courses);
        //     }else{
        //         next(err);
        //     }   
        // })sa

        Course.find({})
        
            .then(courses => {
                
                // console.log(courses)
                res.render("home", {courses: multiMongooseToObject(courses)})

            })
            .catch(next); 


    }

    // GET /SEARCH
    search(req, res) {
        res.render("search")
    }
}

module.exports = new SiteController;
