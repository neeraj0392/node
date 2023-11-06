const express = require("express");
const {MongoClient, ObjectId} = require("mongodb");
const cors = require("cors");

const app = express();
const todoRoutes = express.Router();
app.use(cors());
app.use(express.json());
app.use("/todos", todoRoutes);

// // Mongo configuration
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
let db;


// routes

// Add route
todoRoutes.route("/add").post(async (req, res) => {
    await db.collection("todos").insertOne(req.body);
    res.send(req.body);
});


// Get todos
todoRoutes.route("/").get(async (req, res) => {
    let todos = await db.collection("todos").find({}).toArray();
    res.send(todos);
});


// get specific todo by id
todoRoutes.route("/:id").get(async (req, res) => {
    let id = new ObjectId(req.params.id);
    let todo = await db.collection("todos").find({_id: id}).toArray();
    res.send(todo);
});


// update todo item
todoRoutes.route("/update/:id").put(async (req, res) => {
    let id = new ObjectId(req.params.id);

    let todo = await db.collection("todos").findOneAndUpdate({
        _id: id
    }, {
        $set: {
            todo_description: req.body.todo_description,
            todo_responsible: req.body.todo_responsible,
            todo_priority: req.body.todo_priority,
            todo_completed: req.body.todo_completed
        }
    }, {returnDocument: 'after'});

    res.send(todo);
});


// delete
todoRoutes.route("/delete/:id").delete(async (req, res) => {
    await db.collection("todos").deleteOne({
        _id: new ObjectId(req.params.id)
    });
    res.send("Todo deleted successfully");
});

async function connectToMongoAndStartServer() { // Connecting to mongo
    await client.connect();
    db = client.db("todoApp");
    console.log("connected to Mongo successfully");

    // start app when connection is successful
    app.listen(3000, () => {
        console.log("listening on port number 3000");
    })
}

connectToMongoAndStartServer().then(console.log).catch(console.error);
