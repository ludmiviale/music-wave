const { Song } = require("../../db");

const getSongById = async (id) => {
  const song = await Song.findByPk(id);
  return {
    key: song.id,
    id: song.id,
    title: song.title,
    artist: song.artist,
    album: song.album,
    recordCompany: song.recordCompany,
    duration: song.duration,
    language: song.language,
    lyrics: song.lyrics,
    date: song.date,
    music: song.music,
    image: song.image,
    categoryId: song.categoryId,
  };
};

module.exports = getSongById;
