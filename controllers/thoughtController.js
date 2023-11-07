const { ObjectId } = require('mongoose').Types;
const { Thought } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req,res) {
    try {
      
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get thought by id
  async getSingleThought(req,res) {
    try {
      
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Create new thought
  async createThought(req,res) {
    try {
      
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Update existing thought
  async updateThought(req,res) {
    try {
      
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete thought
  async deleteThought(req,res) {
    try {
      
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Add to reaction array
  async addReaction(req,res) {
    try {
      
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // remove from reaction array
  async deleteReaction(req,res) {
    try {
      
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
};