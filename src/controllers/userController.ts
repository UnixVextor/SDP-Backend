import { User } from '@prisma/client';
import {Request, Response} from 'express';
import * as userService from '../services/userService';

export const getUser = async(req:Request, res: Response) => {
    //@ts-ignore
    const user:User = await userService.getUserById(req.payload.userId)
    if(!user){
        return res.status(404).json({
            message: "User Not Found"
        })
    }

    res.status(200).json({
        data: user
    })
}