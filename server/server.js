require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => console.log("Connected to MongoDB"));

app.use("/api/calendar", require("./Controllers/CalendarController"));

app.listen(5000, () => console.log("Server started"));

