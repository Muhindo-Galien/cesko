const express= require("express");
var cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());

// Route imports
const user = require("./routes/userRoute");

app.use("/api/v1/", user);

module.exports  = app;