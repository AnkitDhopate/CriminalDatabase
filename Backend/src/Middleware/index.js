const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (res, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
    // cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadStorage = multer({ storage });

exports.upload = uploadStorage.fields([
  { name: "criminalImage", maxCount: 1 },
  { name: "criminalFingerprint", maxCount: 1 },
]);
