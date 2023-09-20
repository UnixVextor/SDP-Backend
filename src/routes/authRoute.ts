import express from 'express';
import * as authController from '../controllers/authController';

export const authRouter =  express.Router();

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/logout', authController.logout);

