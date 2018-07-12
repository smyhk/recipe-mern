import mongoose from 'mongoose';

// define Chef model
const Chef = mongoose.model('Chef', {
  username: String,
});

export default Chef;