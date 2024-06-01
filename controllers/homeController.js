const articles = require("../data/json/articles.json");
const utils = require("../data/modules/utils.js");

const homeView = {

  get(req, res) {

    const newArticles = articles.map(article => {
      
      const newArticle = {...article};
      
      newArticle["text"] = utils.cutStr(article["text"], 30);
      
      return newArticle;
    });

    res.render("index.ejs", {
      newArticles
    });
  },

}

module.exports =  homeView;