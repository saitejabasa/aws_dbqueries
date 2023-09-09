const { DynamoDBClient, QueryCommand } = require("@aws-sdk/client-dynamodb");

const { credentials, tableName } = require("../credentials/access");

module.exports = async (req, res) => {
  const client = new DynamoDBClient({
    region: "us-east-1",
    credentials: credentials,
  });
};
