const express =require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const app = express();
const routes = require("./routes/ToDoRoute");

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_URL)
.then(() => {
    console.log(`connected to mongoDB...`)
})
.catch((err) => {
    console.error(`could not connect to mongoDB`, err)
})

app.use('/',routes);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}...`);
})
