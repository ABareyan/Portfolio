var path = require('path');


module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/main.html"));
    });

    app.get("/about", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/html/about_me.html"));
  });

    app.get("/portfolio", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/html/portfolio.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/contact.html"));
});




};

