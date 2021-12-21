
const express = require("express");
const app = express();
const PORT = 3001;

const fs = require("fs");
const path = require("path");
const pathToFile = path.resolve("./data.json");
const cors = require("cors");

const corsOption = {
    origin: "http://localhost:3000",
    optionStatus: 200,
}
app.use(cors(corsOption))

app.get("/", (req, res) => {
    res.send(pathToFile)
})

app.get("/api/resources", (req, res) => {
    const resources = JSON.parse(fs.readFileSync(pathToFile))
    res.send(resources)
})

app.listen(PORT, () => {
    console.log("Server is listening on port:" + PORT);
})