// const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log("Request Method is " + req.method);

//     if(req.method==="GEt"){

//     }
//     if(req.method=="Delete"){

//     }
//     res.end("End");
// });


// server.listen(3000, () => {
//     console.log("http server listening on port 3000");
// })


// **************Express */
const express = require("express");
const app = express();
app.use(express.json());

// Custom middleware
app.use((req, res, next) => {
    req.myproperty = "Myproperty";
    // res.send("Ok");
    next();
})

const data = [
    {
        id: 1,
        name: "Akash",
        age: 23,
        city: "Mumbai",
        salary: "30000"
    }, {
        id: 2,
        name: "Ravindra",
        age: 23,
        city: "Delhi",
        salary: "25000"
    }
]

// app.method("path","Handler")
// endpoint
app.get("/employees", (req, res) => {
    res.status(200).json({data: data});
});

app.get("/employees/:id", (req, res) => {
    const id = req.params.id;

    let employee = data.find(e => e.id == id);

    if (employee) {
        res.status(200).json({employee})
    } else {
        res.status(404).json({message: "Employee do not exists"});
    }
});


app.post("/employees", (req, res) => {
    let employee = req.body;
    // validate request
    for (const key in employee) {
        if (key == "name" || key == "age" || key == "salary" || key == "city" || key == "id") {
            continue;
        } else {
            res.status(400).json({message: "BadRequest. Data is incorrect"});
        }
    }

    data.push(employee);

    res.status(201).json({data: employee});
});

app.put("/employees/:id", (req, res) => {
    let employee = req.body;
    // validation
    let id = req.params.id;
    data.splice(data.findIndex(e => e.id == id), 1);
    data.push(employee);

    res.status(200).json({data: employee})
});

// / delete operation?
// patch operation?


app.use((req, res, next) => {
    console.log("last middleware");
    next();
});

app.listen(3000, () => {
    console.log("Application is listening on port 3000");
})
