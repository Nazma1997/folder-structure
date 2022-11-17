const {Schema, model } = require('mongoose');

const folderDataSchema = new Schema({
  name: {type: String, required: true}
});

const FolderData = model('FolderData', folderDataSchema);

module.exports = FolderData;