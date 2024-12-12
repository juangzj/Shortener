import express from 'express'; // express import
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/UserController.js';

const userRouter = express.Router();

userRouter.get('/getUsers', getAllUsers) // get all users
userRouter.get('/getUser/:user_id', getUser) // get user by id
userRouter.post('/createUser', createUser) // create user
userRouter.put('/updateUser/:user_id', updateUser) // update user
userRouter.delete('/deleteUser/:user_id', deleteUser) // delete user by id

// user routes export
export default userRouter;