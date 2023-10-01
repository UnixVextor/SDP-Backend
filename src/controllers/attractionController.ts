import {Request, Response} from 'express';
import bcrypt, { hash } from "bcrypt";

import * as attractionService from "../services/attractionService"
import { request } from 'http';

export const getNature = async  (req:Request, res:Response) => {
    const type = 'Nature';
    const NatureAttraction = await attractionService.getAllAttraction(type);
    if (!NatureAttraction){
        return res.status(404).json({
            message : ' Nature Actraction not found'
        })
    }
    return res.status(200).json({NatureAttraction})
}

export const getHistory = async ( req: Request, res:Response) => {
    const type = 'History';
    const HistoryAttraction = await attractionService.getAllAttraction(type);
    if (!HistoryAttraction){
        return res.status(404).json({
            message : 'History Actraction not found'
        })
    }
    return res.json({HistoryAttraction})
}

export const getActivity = async (req:Request, res:Response) => {
    const type = 'Activity';
    const ActivityAttraction = await attractionService.getAllAttraction(type);
    if (! ActivityAttraction){
        return res.status(404).json({
            message : 'Activity Actraction not found'
        })
    }
    return res.json({ActivityAttraction})
}

export const getCafe = async (req:Request, res:Response) => {
    const type = 'Cafe';
    const CafeAttraction = await attractionService.getAllAttraction(type);
    if (!CafeAttraction){
        return res.status(404).json({
            message : 'Cafe Attraction Actraction not found'
        })
    }
    return res.json({CafeAttraction})
}

export const getOthers = async (req:Request, res:Response) => {
    const type = 'Others';
    const OthersAttraction = await attractionService.getAllAttraction(type);
    if (!OthersAttraction){
        return res.status(404).json({
            message : 'Others Attraction Actraction not found'
        })
    }
    return res.json({OthersAttraction})
}