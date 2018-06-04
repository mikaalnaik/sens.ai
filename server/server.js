var express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 3001;


app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

  // Make the express server serve static assets (html, javascript, css) from the /public folder

  app.use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));
