const Criminal = require("../Model/criminalModel");

exports.create = (req, res) => {
  Criminal.findOne({ contact: req.body.contact }).exec(async (error, crim) => {
    if (error) {
      return res.status(400).json(error);
    }
    if (crim) {
      return res.status(406).json({ message: "Criminal Record already exist" });
    } else {
      const { name, age, email, contact, crime } = req.body;
      const { criminalImage, criminalFingerprint } = req.files;
      // const imgPath = criminalImage[0].path;
      // const fingPath = criminalFingerprint[0].path;
      const imgPath =
        "http://localhost:4000/public/" + criminalImage[0].filename;
      const fingPath =
        "http://localhost:4000/public/" + criminalFingerprint[0].filename;
      const newCriminal = new Criminal({
        name,
        age,
        email,
        contact,
        crime,
        criminalImage: imgPath,
        criminalFingerprint: fingPath,
      });
      newCriminal.save((error, savedCrim) => {
        if (error) {
          return res.status(400).json({ message: `Error: ${error}` });
        }
        if (savedCrim) {
          return res.status(201).json({ savedCrim });
        }
      });
    }
  });
};

exports.retrieve = (req, res) => {
  Criminal.find().exec((error, criminalList) => {
    if (error) {
      return res.status(400).json({ error });
    }

    if (criminalList.length > 0) {
      res.status(200).json({ criminalList });
    } else {
      res.status(200).json("Empty List");
    }
  });
};

exports.deleteCriminal = async (req, res) => {
  const id = req.body.payload;

  const deleteCriminal = await Criminal.findOneAndDelete({
    _id: id,
  }).then((success, error) => {
    if (error) {
      res.status(400).json({ message: "Something went wrong" });
    }

    if (success) {
      res.status(201).json({ message: "Criminal Record Removed" });
    }
  });
};

exports.findOneCriminal = async (req, res) => {
  const { name } = req.body;

  const checkFindResult = await Criminal.findOne({
    name,
  }).then((success, error) => {
    if (error) {
      res.status(400).json({ error });
    }

    if (success != null) {
      res.status(201).json(success);
    } else {
      res.status(201).json("no such criminal found");
    }
  });
};
