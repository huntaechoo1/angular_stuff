console.log("server is running")

const session = require('express-session');
const flash = require('express-flash');
const express = require("express"),
		 cors = require("cors"),
         port = 8000,
      DB_NAME = "my_first_db",
          app = express();

app.use(flash());
app.use(cors());

app.use(session({
  secret: 'theCakeIsALie',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


app.use(express.json());
app.use(express.static(__dirname + "/client/dist/client"));

require("./server/utils/mongoose")("my_first_db");
require("./server/utils/routes")(app);

app.listen(8000, () => console.log("listening on port 8000"));