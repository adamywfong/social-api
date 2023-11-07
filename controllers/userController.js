const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  async getUsers(req,res) {
    try {
      
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get user by id
  async getSingleUser(req,res) {
    try {
      
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Create new user
  async createUser(req,res) {
    try {
      
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
      
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Add to user friends array
  async addFriend(req,res) {
    try {
      
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // remove from friends array
  async deleteFriend(req,res) {
    try {
      
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
};