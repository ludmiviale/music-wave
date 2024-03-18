const { Song, Category } = require("../../db");

const getAllSongs = async () => {
  const allSongs = await Song.findAll({});
  return allSongs;
};

module.exports = getAllSongs;
