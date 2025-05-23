const mongoose = require('mongoose');
const LicenseSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  key: String,
  eaData: Object,
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('License', LicenseSchema);