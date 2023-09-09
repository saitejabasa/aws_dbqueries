const app = require("express")();

const bodyParser = require("body-parser");
const router = require("./API/routes");

app.use(bodyParser.json());
app.use("/", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
