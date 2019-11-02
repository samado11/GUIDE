const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const Users_reviewSchema = new Schema({
    user_name: {
        type: String,
        required: true
      },
      comment: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      shop_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:'User'
      },

});

const Users_review = mongoose.model('Users_review', Users_reviewSchema);

module.exports = Users_review;
