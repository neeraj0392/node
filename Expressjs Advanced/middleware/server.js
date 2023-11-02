const express = require("express");
const app = express();
const uuid = require("uuid");
const customerRoutes = require("./customer-routes.js");

app.use(express.static("public", {maxAge: 60000}));
app.use("/Student", express.urlencoded());
app.use("/Customer", customerRoutes);


const employeeRoute = app.route("/Employee");

app.use((req, res, next) => { // console.log(req.headers);
    if (!req.headers["x-request-id"]) {
        res.setHeader("x-request-id", uuid.v4())
    }

    next();
})


app.get("/", (req, res, next) => {
    req.firstGetMiddleware = "First";
    res.send("FirstOne sent the response");
    // next();

}, (req, res, next) => {
    console.log(req.firstGetMiddleware);
    res.send("SecondMiddleware sent the response");
});

app.post("/Student", (req, res) => {
    console.log(req.body);
    res.send("OK");
})

app.post("/Employee", (req, res) => {
    console.log(req.body);
    res.send("OK");
})


// /////Error handling*****************************
app.get("/SyncError", (req, res, next) => {
    try {
        throw new Error("Error thrown by Endpoint");
    } catch (ex) { // res.status(500).json({message: ex.message});
        next(ex);
    }
});

app.get("/AsyncError", (req, res, next) => {
    setTimeout(() => {
        try {
            throw new Error("Aysnc error");
        } catch (ex) {
            next(ex);
        }
    }, 1000);
});

app.use((error, req, res, next) => {
    if (error) {
        res.status(500).json({
            message: "From Error Middleware " + error.message
        });
    }
    next();
})


/*********************EmployeeRoute */
employeeRoute.get((req, res) => {
    res.send("Sent by Employee get endpoint");
})


app.listen(3000, () => {
    console.log("Server listening on port no 3000")
})
