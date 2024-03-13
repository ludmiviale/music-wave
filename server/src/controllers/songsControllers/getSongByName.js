const { Song } = require("../../db");
const { Op } = require("sequelize");

const getSongByName = async (name) => {
  const lowercaseName = name.toLowerCase();
  const songFound = await Song.findAll({
    where: {
      name: {
        [Op.iLike]: `%${lowercaseName}%`,
      },
    },
  });
  return songFound;
};

module.exports = getSongByName;
