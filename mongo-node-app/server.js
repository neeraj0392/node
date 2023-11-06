const express = require("express");
const cors = require("cors");

app = express();
const studentRoutes = require("./student.js");
app.use(cors({origin: "*"}));

app.use(express.json());

app.use("/Student", studentRoutes);

app.listen(3000, () => {
    console.log("App listening on port 3000");
})
