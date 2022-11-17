const router = require('express').Router()

//Routes

const folderRouter = require('./folder');

//Use all routes

router.use('/api/v1/folder', folderRouter);


module.exports = router