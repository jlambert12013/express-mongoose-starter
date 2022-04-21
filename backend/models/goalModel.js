const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [
        true,
        'PLEASE ADD SOMETHING TO THE FIELD WITH THE KEY text TO POST. ',
      ],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal', goalSchema)
