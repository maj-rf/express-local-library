const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, minLength: 3, maxLength: 100 },
});

// Virtual for Genre
GenreSchema.virtual('url').get(function () {
  return '/genre' + this._id;
});

module.exports = mongoose.model('Genre', GenreSchema);