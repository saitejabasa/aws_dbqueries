const express = require("express");
const router = express.Router();

const putItems = require("../src/db/putItem");
const getItems = require("../src/db/getItem");
const updateItems = require("../src/db/UpdateItem");

router.post("/putItems", putItems);
router.get("/getItems", getItems);
router.post("/updateItems", updateItems);

module.exports = router;
