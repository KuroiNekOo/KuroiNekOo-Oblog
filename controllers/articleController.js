const articles = require("../data/json/articles.json");

const articleView = {

  get(req, res, next) {
    const url = req.params.id;

    const article = articles.find((article) => url === article["id"].toString());

    if (!article) {
      next();
      return;
    }

    res.render("article.ejs", {
      article
    });
  },

}

module.exports =  articleView;