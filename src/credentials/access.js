const { fromSSO } = require("@aws-sdk/credential-providers");
let credentials;
(async () => {
  credentials = await fromSSO({
    profile: "AdministratorAccess-956563268580",
  })();
})();
const tableName = "test_table";
module.exports = { credentials, tableName };
