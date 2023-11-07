const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const {format_date} = require('../utils/helpers');


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => format_date(date)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    }
  }
);

// Create a virtual property `commentCount` that gets the amount of comments per post
thoughtSchema.virtual('reactionCount').get(function () {
  if (this.reactions) {
    return this.reactions.length;
  } else {
    return 0;
  }
});

// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
