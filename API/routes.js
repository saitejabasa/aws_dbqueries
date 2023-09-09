const express = require("express");
const router = express.Router();

const putItems = require("../src/db/putItem");
const getItems = require("../src/db/getItem");
const updateItems = require("../src/db/UpdateItem");
const deleteItems = require("../src/db/deleteItems");

router.post("/putItems", putItems);
router.get("/getItems", getItems);
router.post("/updateItems", updateItems);
router.post("/deleteItems", deleteItems);

module.exports = router;
