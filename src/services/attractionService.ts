import { Prisma, PrismaClient } from '@prisma/client'
import { Request , Response } from 'express'

const prisma = new PrismaClient();

export const getAllAttraction = async (_type : string) =>  {

    try{    
        const acttraction = await prisma.attractionCatagory.findMany({
            where: {
                type : _type
            },
            include: {
                

            }
        });

        return acttraction;

    }catch(error){
        return error;
    }
}