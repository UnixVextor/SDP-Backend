import express from 'express';
import * as userController from '../controllers/userController';
import {verifyJWT} from '../middleware/verifyJWT'

export const userRouter =  express.Router();
userRouter.get('/user/getUser', verifyJWT, userController.getUser);


