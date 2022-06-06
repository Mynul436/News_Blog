const expess = require("express");
const app = expess();
const db = require("./models");

db.sequelize.sync().then(() => {
  app.listen(3004, () => {
    console.log("Server running on port 3004");
  });
});
