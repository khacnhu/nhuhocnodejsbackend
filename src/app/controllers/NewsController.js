class NewsController {
    index(req, res) {
        res.render("news");

    }

    show(req, res) {
        res.send("new details")
    }
}

module.exports = new NewsController;










