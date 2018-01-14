const slugify = require('slugify');

module.exports = function (str) {
  return slugify(str).toLowerCase();
}