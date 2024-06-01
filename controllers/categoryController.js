const articles = require("../data/json/articles.json");

const articleView = {

  get(req, res, next) {
    const url = req.params.category;

    const articlesFound = articles.filter((article) => url === article["category"].toString());

    if (!articlesFound) {
      next();
      return;
    }

    res.render("category.ejs", {
      articlesFound
    });
  },

}

module.exports =  articleView;