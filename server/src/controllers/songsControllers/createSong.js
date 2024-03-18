const { Song, Category } = require("../../db");

const createSong = async (
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
) => {
  const newSong = await Song.create({
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
  });

  return newSong;
};

module.exports = createSong;
