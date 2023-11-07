const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  async getUsers(req,res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Get user by id
  async getSingleUser(req,res) {
    try {
      const user = await User.findOne({_id: req.params.studentId})
        .select('__v')
        .populate('thoughts')
        .populate('friends')

      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      res.json(user)
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Create new user
  async createUser(req,res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Update existing user
  async updateUser(req,res) {
    try {
      
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete user
  async deleteUser(req,res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.studentId });
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({ message: 'User successfully deleted' });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Add to user friends array
  async addFriend(req,res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId},
        {$addToSet: {friends: req.params.friendId}},
        {runValidators: true, new: true}
      );

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // remove from friends array
  async deleteFriend(req,res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId},
        {$pull: {friends: req.params.friendId}},
        {runValidators: true, new: true}
      );

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
};