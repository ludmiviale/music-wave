const { Song, Category } = require("../../db");

const getAllSongs = async () => {
  const allSongs = await Song.findAll({
    include: [{ model: Category, attributes: ["name"] }],
  });
  return allSongs;
};

module.exports = getAllSongs;
