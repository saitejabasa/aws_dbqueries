const {
  DynamoDBClient,
  UpdateItemCommand,
} = require("@aws-sdk/client-dynamodb");
const { credentials, tableName } = require("../credentials/access");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");

module.exports = async (req, res) => {
  const client = new DynamoDBClient({
    region: "us-east-1",
    credentials: credentials,
  });
  const Items = req.body;
  const input = {
    ExpressionAttributeNames: {
      "#AT": "designation",
      "#Y": "experence",
    },
    ExpressionAttributeValues: {
      ":t": {
        S: "Sr.Software Engineer",
      },
      ":y": {
        N: "6.5",
      },
    },
    Key: marshall(Items), //schema
    ReturnValues: "ALL_NEW", //"NONE" || "ALL_OLD" || "UPDATED_OLD" || "ALL_NEW" || "UPDATED_NEW",
    TableName: tableName,
    UpdateExpression: "SET #Y = :y, #AT = :t",
  };
  const command = new UpdateItemCommand(input);
  try {
    const response = await client.send(command);
    return res.status(200).json({ message: response });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};
