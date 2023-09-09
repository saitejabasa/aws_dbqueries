const { DynamoDBClient, QueryCommand } = require("@aws-sdk/client-dynamodb");

const { credentials, tableName } = require("../credentials/access");

module.exports = async (req, res) => {
  const client = new DynamoDBClient({
    region: "us-east-1",
    credentials: credentials,
  });
  const Params = {
    TableName: tableName,
    KeyConditionExpression: "id= :id",
    ExpressionAttributeValues: {
      ":id": { S: "1234567" },
    },
  };
  const queryCommand = new QueryCommand(Params);

  try {
    const result = await client.send(queryCommand);
    return res.status(200).json({ message: result.Items });
  } catch (err) {
    console.error("Error quering DynamoDB:", error);
    return res.status(400).json({ message: error });
  }
};
