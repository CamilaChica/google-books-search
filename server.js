const express = require("express");
const mongoose = require ("mongoose");
const cors = require("cors");
const routes= require ("./routes");

const PORT = process.env.PORT || 3030;
const app = express();

app.use(cors());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes)

//Connet to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", 
{
    useNewUrlParser: true,
    useCreateIndex:true
});


app.listen(PORT, () => {
  console.log(`Connected! To port: ${PORT}!`);
});