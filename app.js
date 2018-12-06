const express = require(`express`);
const exphb = require(`express-handlebars`);
const app = express();

app.engine(`handlebars`, exphb({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);

app.use(require(`./routes`));

app.use(express.static(`public`));

module.exports = app;