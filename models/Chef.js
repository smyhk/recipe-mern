const mongoose = require('mongoose');

// define Chef model
const Chef = mongoose.model('Chef', {
  username: String,
});

module.exports = Chef;