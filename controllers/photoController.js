import Photo from "../models/photoModels.js";

const createPhoto = async (req, res) => {
  try {
    const photo = await Photo.create(req.body);
    res.status(201).json({
      succeeded: true,
      photo,
    });
  } catch (error) {
    res.status(500).json({
      succeeded: false,
      error,
    });
  }
};

const getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find({});
    res.status(200).render("portfolio", {
      photos,
    });
  } catch (error) {
    res.status(500).json({
      succeeded: false,
      error,
    });
  }
};

const getAPhoto = async (req, res) => {
  try {
    const photo = await Photo.findById({ _id : req.params.id })
    res.status(200).render("photo", {
      photo,
    });
  } catch (error) {
    res.status(500).json({
      succeeded: false,
      error,
    });
  }
};



export { createPhoto, getAllPhotos, getAPhoto  };
