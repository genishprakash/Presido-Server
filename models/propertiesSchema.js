const mongoose = require('mongoose');

const PropertiesSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  price: Number,
  location: String,
  bedrooms: Number,
  bathrooms: Number,
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Properties', PropertiesSchema);
