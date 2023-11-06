const express = require('express');
const db = require('./db');
const app = express();
app.use(express.json());

// GET
app.get('/customers', async (req, res) => {
    try {
        const result = await db.pool.query("select * from customers");
        res.send(result);
    } catch (err) {
        throw err;
    }
});

// POST
app.post('/customers', async (req, res) => {
    let customer = req.body;

    try {
        const result = await db.pool.query("insert into customers(customerName,contactName,address,city,postalCode,country) values(?,?,?,?,?,?)", [
            customer.customerName,
            customer.contactName,
            customer.address,
            customer.city,
            customer.postalcode,
            customer.country
        ]);
        res.status(201).json({message: "created"});
    } catch (err) {
        throw err;
    }
});


app.listen(3000, () => console.log(`Listening on port 3000`));
