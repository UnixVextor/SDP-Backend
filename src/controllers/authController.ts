import {Request, Response} from 'express';
import bcrypt, { hash } from "bcrypt";

// import service
import * as userService from '../services/userService';

export const register = async (req: Request, res: Response) => {
    const {firstname, lastname, username,password} = req.body;
    if(!firstname || !lastname || !username || !password){
        res.status(400).json(
            {
                message: "All input required"
            }
        )
        return
    }

    const oldUser = await userService.getUserByUsername(username);
    if (oldUser){
        return res.status(404).json({
            message: "Already have username"
        })
    }

    const hashPassword = await bcrypt.hash(password, 10);
    
    const newUser = await userService.createUser(firstname, lastname,username, hashPassword);
    res.status(200).json({
        message: "Register complet",
        data: newUser
    })
}

export const login = (req: Request, res: Response) => {
    res.send('login');
}

export const logout = (req: Request, res: Response) => {
    res.send('logout');
}