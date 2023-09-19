import {Request, Response} from 'express';

// import service
import * as userService from '../services/userService';

export const login = (req: Request, res: Response) => {
    userService.getUser();
    res.send('login');
}

export const logout = (req: Request, res: Response) => {
    res.send('logout');
}