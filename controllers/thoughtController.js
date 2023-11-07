const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req,res) {
    try {
      const thoughts = await Thought.find();

      res.json(thoughts);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get thought by id
  async getSingleThought(req,res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' })
      }

      res.json(thought)
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Create new thought
  async createThought(req,res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId},
        { $push: {thoughts: thought._id}},
        { new: true}
      );
      if (!user) {
        return res
          .status(404)
          .json({ message: 'thought created, but no user with this ID' });
      }
      res.json(thought);

    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Update existing thought
  async updateThought(req,res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set:  req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' })
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete thought
  async deleteThought(req,res) {
    try {
      const thought = await Thought.findOneAndDelete({_id: req.params.thoughtId })
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' })
      }
      await User.findOneAndUpdate(
        { username: thought.username},
        { $pull: {thoughts: req.params.thoughtId}},
      );
      res.json({ message: 'Thought successfully deleted' });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Add to reaction array
  async addReaction(req,res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.studentId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' })
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // remove from reaction array
  async deleteReaction(req,res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.studentId },
        { $pull: { reactionId: req.params.reactionId } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' })
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
};