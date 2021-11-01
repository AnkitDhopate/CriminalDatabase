const express = require("express");
const {
  create,
  retrieve,
  deleteCriminal,
  findOneCriminal,
} = require("../Controller/user");
const { upload } = require("../Middleware/index");
const router = express.Router();

router.post("/criminal/create", upload, create);
router.get("/criminal/retrieve", retrieve);
router.post("/criminal/delete", deleteCriminal);
router.get("/criminal/find", findOneCriminal);

module.exports = router;
