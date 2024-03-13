const { Router } = require("express");
const router = Router();

const songsRouter = require("./songsRouter");
const categoriesRouter = require("./categoriesRouter");

router.use("/songs", songsRouter);
router.use("/categories", categoriesRouter);

module.exports = router;
