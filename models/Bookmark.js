const mongoose = require('mongoose');

const bookmarkSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    validate: {
      validator: v => /^https?:\/\/.+/.test(v),
      message: props => `${props.value} is not a valid URL`
    }
  },
  title: String,
  description: String,
  tags: [String],
  favorite: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Bookmark', bookmarkSchema);
