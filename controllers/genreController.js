const Genre = require('../models/genre');
exports.genre_list = function (req, res) {
  Genre.find()
    .sort([['name', 'ascending']])
    .exec(function (err, list_genre) {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.render('genre_list', {
        title: 'Genre List',
        genre_list: list_genre,
      });
    });
};

exports.genre_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre detail: ' + req.params.id);
};

exports.genre_create_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre create GET');
};

exports.genre_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre create POST');
};

exports.genre_delete_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre delete GET');
};

exports.genre_delete_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre delete POST');
};

exports.genre_update_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre update GET');
};

exports.genre_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre update POST');
};
