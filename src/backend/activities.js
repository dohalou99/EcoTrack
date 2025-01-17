const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  name: String,
  description: String,
  date: { type: Date, default: Date.now },
  userId: String
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;

