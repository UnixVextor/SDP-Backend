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
                attractions:{
                    select:{
                        id: true,
                        name: true,
                        detail: true,
                        address: true,
                        hotels: true,
                        pictures:{
                            select :{
                                image : true,
                            }
                        }
                    }
            }
        }
    });

        return acttraction;

    }catch(error){
        return error;
    }
}