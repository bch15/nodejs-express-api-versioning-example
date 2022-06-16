let express = require("express");
let router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Hello v2.0 GET API from Bch15");
});

router.post("/", function (req, res, next) {
  res.send("Hello v2.0 POST API from Bch15");
});

module.exports = router;
