const newRouter = require("./new")
const siteRouter = require("./site")
const coursesRouter = require("./courses")
const meRouter = require("./me")

function route(app) {
    

    app.use('/me', meRouter)
    
    app.use('/news', newRouter);

    app.use('/courses', coursesRouter)
    
    app.use('/', siteRouter);
}

module.exports = route;








