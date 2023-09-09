const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const { credentials, tableName } = require("../credentials/access");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");

module.exports = async (req, res) => {
  const client = new DynamoDBClient({
    region: "us-east-1",
    credentials: credentials,
  });

  const Items = req.body;

  const params = {
    TableName: tableName,
    Item: marshall(Items),
  };
  const command = new PutItemCommand(params);
  try {
    const response = await client.send(command);
    return res.status(200).json({ message: "Added Successfully" });
  } catch (error) {
    return res.status(400).json({ message: "error" });
  }
};
