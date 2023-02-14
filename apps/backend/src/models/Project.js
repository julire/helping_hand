import mongoose from 'mongoose';

const Project = new mongoose.Schema({
  projectName: { type: String, trim: true, default: '' },
  projectOwner: { type: String, trim: true, default: '' },
  description: { type: String, trim: true, default: '' },
  imageUrl: { type: String, trim: true, default: '' },
  description_ngo: { type: String, trim: true, default: '' },
  category: { type: String, trim: true, default: '' },
  location: { type: String, trim: true, default: '' },
  days: { type: Array, trim: true, default: '' },
  working_hours: { type: String, trim: true, default: '' },
});

module.exports = mongoose.model('Project', Project);
