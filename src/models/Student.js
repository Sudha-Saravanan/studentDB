var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Student = new Schema({
  fullName: {
    type: String
  },
  Course: {
    type: String
  }
},{
    collection: 'students'
});

module.exports = mongoose.model('Student', Student);