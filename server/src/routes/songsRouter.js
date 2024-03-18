const { Router } = require("express");
const songsRouter = Router();
const {
  getSongsHandler,
  getSongByIdHandler,
  createSongHandler,
} = require("../handlers/songsHandler");

songsRouter.get("/", getSongsHandler);
songsRouter.get("/:id", getSongByIdHandler);
songsRouter.post("/", createSongHandler);

module.exports = songsRouter;
