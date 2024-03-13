const { Router } = require("express");
const songsRouter = Router();
const {
  getSongsHandler,
  createSongHandler,
} = require("../handlers/songsHandler");

songsRouter.get("/", getSongsHandler);
songsRouter.post("/", createSongHandler);

module.exports = songsRouter;
