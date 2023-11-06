const express = require("express");
const router = express.Router();
const connectToDatabase = require("./mongo/index.js");


router.get("/", async (req, res) => {
    const client = await connectToDatabase();
    const dbo = client.db("sampledb");
    const result = await dbo.collection("student").find({}, {
        projection: {
            name: 1,
            age: 1,
            _id: 0
        }
    }).toArray();
    res.status(200).json(result);
});

router.post("/", async (req, res) => {
    const client = await connectToDatabase();
    const dbo = client.db("sampledb");
    const result = await dbo.collection("student").insertOne(req.body);
    console.log(result);
    res.status(201).json({message: "created"});
});


module.exports = router;
