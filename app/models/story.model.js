/**
 * This schema for story
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StorySchema = new Schema({
  
  firstname: {
    type: String,
    index: true
  },
  lastname: {
    type: String,
    index: true
  },
  contact: {
    type: String,
    unique:true,
    index: true
  },
  country: {
    type: String,
    index: true
  },
  stage: {
    type: String
  },
  note: {
    type: String
  },
  notedby: {
    type: String
  },

  createdDate: {
    type: Date,
    default: Date.now
  },
  updatedDate: {
    type: Date,
    default: Date.now
  }
});

const Model = mongoose.model('Story', StorySchema);
module.exports = Model;