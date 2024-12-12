import { where } from "sequelize";
import UserModel from "../models/UserModel.js"; //  User model import

/**
 * User methods
 */


// Get all Users
export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll()
    res.json(users)
  } catch (error) {
    res.json({ message: error.message })
  }
}

// Get user 
export const getUser = async (req, res) => {
  try {
    const user = await UserModel.findAll({
      where: {
        user_id: req.params.user_id
      }
    })
    res.json(user[0])
  } catch (error) {
    res.json({ message: error.message })
  }

}

// Create User
export const createUser = async (req, res) => {
  try {
    await UserModel.create(req.body)
    res.json({
      "message": "New User Created Succesfully "
    })
  } catch (error) {
    res.json({ message: error.message })
  }

}
// Update User 
export const updateUser = async (req, res) => {
  try {
    await UserModel.update(req.body, {
      where: {
        user_id: req.params.user_id
      }
    })
    res.json({
      "message": "User updated Succesfully "
    })
  } catch (error) {
    res.json({ message: error.message })
  }

}

// Delete user
export const deleteUser = async (req, res) => {
  try {
    await UserModel.destroy({
      where: {
        user_id: req.params.user_id
      }
    })
    res.json({
      "message": "The user was deleted Succesfully "
    })
  } catch (error) {
    res.json({ message: error.message })
  }

}
