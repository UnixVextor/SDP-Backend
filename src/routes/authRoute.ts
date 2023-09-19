import express from 'express';
import * as authController from '../controllers/authController';

export const authRouter =  express.Router();

authRouter.get('/login', authController.login);

authRouter.get('/logout', authController.logout)

