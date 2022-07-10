const newRouter = require("./new")
const siteRouter = require("./site")
const coursesRouter = require("./courses")

function route(app) {
    

    
    app.use('/news', newRouter);

    app.use('/courses', coursesRouter)
    
    app.use('/', siteRouter);
}

module.exports = route;








