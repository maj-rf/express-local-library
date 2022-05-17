const Book = require('../models/book');

exports.index = function (req, res) {
  res.send('NOT IMPLEMENTED: Site Home Page');
};

exports.book_list = function (req, res) {
  res.send('NOT IMPLEMENTED: Book list');
};

exports.book_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

exports.book_create_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Book create GET');
};

exports.book_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Book create POST');
};

exports.book_delete_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Book delete GET');
};

exports.book_delete_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
exports.book_update_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
exports.book_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Book update POST');
};
