const mongoose = require(`mongoose`);
const app = require(`./app`);
const port = 3000;


mongoose.connect(`mongodb://localhost/fakebae`, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on(`error`, console.log);
//line above is shorthand for line below
//mongoose.connection.on(`error`, err => console.log(err));

app.listen(port, () => console.log(`Server is running on port ${port}`));