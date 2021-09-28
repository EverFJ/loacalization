const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 8000;
const translations = require("./translations.json");

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(express.static("public"))

app.get("/:lang?", (req, res) => {
    const lang = req.params.lang || "fr";
    res.render("home", {
        greeting: translations[lang].greeting,
        pageTitle: translations[lang].pageTitle,
        title: translations[lang].title,
        imgPath: `/img/${lang}.png`
    })
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})