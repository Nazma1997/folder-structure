const Folder = require('../models/folder');

const findFolderByProperty = (key, value) => {
  if(key == '_id'){
    return Folder.findById(value);
  }

  return Folder.findOne({[key] : value});
};


//Create new

const createFolder = ({name}) => {
  const folder = new Folder({name});
  return folder.save();
}

//View All list of folder

const findAllFolder = () => {
  return Folder.find();
}

module.exports = {
  findFolderByProperty,
  createFolder,
  findAllFolder
}