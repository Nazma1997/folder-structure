const router = require('express').Router();

const folderController = require('../controller/folder');


/**
 * Get All Folder
 * @method GET
 */

router.get('/', folderController.getAllFolder);

/**
 * Post a folder
 * @method POST
 */

router.post('/', folderController.postFolder);


/**
 * Delete a folder
 * @method DELETE
 */

router.delete('/:folderId', folderController.deleteFolderById);


module.exports = router;