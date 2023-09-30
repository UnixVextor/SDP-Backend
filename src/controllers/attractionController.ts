import * as attractionService from '../services/attractionService';
import {Request, Response} from 'express';

export const getAllAttraction = async (req: Request, res:Response) => {
    const attraction = await attractionService.getAllAttraction();
    if(!attraction){
        return res.status(404).json({
            message: "Product Not Found"
        })
    }
    res.status(200).json(attraction)
}

export const createAttractionCatagory = async (req: Request, res: Response) => {
    const {type} = req.body
    if(!type){
        return res.status(401).json({
            message: "All input required"
        })
    }
    const attraction = await attractionService.getAttractionByType(type);
    if(attraction){
        return res.status(401).json({
            message: "Already have attraction type"
        })
    }
    
    const newAttraction = await attractionService.createAttractionCatagory(type)
    return res.status(200).json({
            message: "Add type succesful"
    })
}

export const getAttractionByType = async (req: Request, res:Response) => {
    const {type} = req.body
    if(!type){
        return res.status(401).json({
            message: "All input required"
        })
    }
    const attraction = await attractionService.getAttractionByType(type);
    res.status(200).json(attraction)
}

export const createAttraction = async (req:Request,res:Response) => {
    const {catagoryId, name, detail, address, location, hotels} = req.body
    
    if(!(catagoryId && name && detail && req.files && address && location)){
        return res.status(401).json({
            message: "All input required"
        })
    }

    //@ts-ignore
    const pictures = req.files?.map(item => {
        return {image: item.filename};
    })

    const jsonLocation = JSON.parse(location)
    const jsonHotels = JSON.parse(hotels)
    try {
        const attraction = await attractionService.createAttraction(catagoryId, name, address,detail,jsonLocation,pictures,jsonHotels)
        return res.status(200).json({
            message: "add product succesful",
            product: attraction
        })   
    } catch (error) {
        res.send(error)
    }
}


export const addAttractionReview = async (req: Request, res: Response) =>{
    const {attractionId, detail, rating} = req.body;
    if(!(attractionId && detail && rating)){
        return res.status(401).json({
            message: "All input required"
        })
    }

    //@ts-ignore
    const review = await attractionService.addAttractionReview(req.payload.userId, attractionId,detail,rating)
    res.status(200).json(review)
}

