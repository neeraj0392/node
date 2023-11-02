const express = require("express");
const router = express.Router();

const customerData = [
    {
        id: 1,
        name: "Ankush",
        orderno: "asdasd1212"
    }, {
        id: 2,
        name: "Aditya",
        orderno: "aasd1212"
    }
]

router.get("/", (req, res) => {
    res.status(200).json({customerData});
})

router.get("/:id", (req, res) => {
    res.status(200).json({
        data: customerData.filter(c => c.id == req.params.id)
    });
})

module.exports = router;
