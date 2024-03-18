const getSongByName = require("../controllers/songsControllers/getSongByName");
const getAllSongs = require("../controllers/songsControllers/getAllSongs");
const getSongById = require("../controllers/songsControllers/getSongById");
const createSong = require("../controllers/songsControllers/createSong");

const getSongsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const songByName = await getSongByName(name);
      res.status(200).json(songByName);
    } else {
      const allSongs = await getAllSongs();
      if (allSongs.length > 0) {
        res.status(200).json(allSongs);
      } else {
        res.status(404).json({ message: "Songs not found" });
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSongByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const songById = await getSongById(id);
    if (songById) {
      res.status(200).json(songById);
    } else {
      res.status(404).json({ message: "Song not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createSongHandler = async (req, res) => {
  const {
    id,
    title,
    artist,
    album,
    recordCompany,
    duration,
    language,
    gender,
    lyrics,
    date,
    music,
    image,
    categoryId,
  } = req.body;
  try {
    const newSong = await createSong(
      id,
      title,
      artist,
      album,
      recordCompany,
      duration,
      language,
      gender,
      lyrics,
      date,
      music,
      image,
      categoryId
    );
    res.status(201).json(newSong);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getSongsHandler,
  getSongByIdHandler,
  createSongHandler,
};
