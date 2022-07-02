const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const postSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: "User"
    },
    title: String,
    description: String,
});

postSchema.pre(/^find/, function (next) {
    this.populate([
      {
        path: 'userId',
      },
    ]);
    next();
  });


module.exports = mongoose.model('Post', postSchema);