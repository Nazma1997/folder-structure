const Folder = require('../models/folder');
const folderService = require('../services/folder');


//Get All folder

const getAllFolder = async(req, res, next) => {
  try{
    const folder = await folderService.findAllFolder();
    return res.status(200).json(folder)

  }
  catch(e){
    next(e)
  }
}

//Post a file

const postFolder = async(req, res, next) => {
  const {name} = req.body;

  try{
    const folder = await folderService.createFolder({name});
    return res.status(201).json(folder)
  }
  catch(e){
    next(e)
  }
};


//Delete a folder

const deleteFolderById = async(req, res, next) => {
  const folderId = req.params.folderId;

  try{
    const folder = await folderService.findFolderByProperty('_id', folderId);
    if(!folder){
      throw error('Folder not found', 404)
    }

    await folder.remove();

    return res.status(203).json({message: 'Folder Deleted Successfully', folder}).send()
  }
  catch(e){
    next(e)
  }
}

module.exports = {
  getAllFolder,
  postFolder,
  deleteFolderById
}