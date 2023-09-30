import { PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const getAllAttraction = async () => {
    try {
        const attractions = await prisma.attractionCatagory.findMany({
            include:{
                attractions:{
                    select:{
                        id: true,
                        name: true,
                        detail:true,
                        address: true,
                        hotels:true,
                        pictures: {
                            select:{
                                image: true
                            }
                        },
                        location: {
                            select:{
                                latitude:true,
                                longitude:true
                            }
                        },
                        reviews:{
                            select:{
                                user:true,
                                detail:true,
                                rating:true,
                                createdAt:true
                            }
                        },
                    },
                   
                }
            }
        })
        return attractions;
    } catch (error:any) {
        return error.message
    }
}

export const getAttractionByType = async (_type: string) => {
    try {
        const attractions = await prisma.attractionCatagory.findFirst({
            where: {
                type: _type
            }, 
            select:{
                attractions:true
            }
        })
        return attractions
    } catch (error:any) {
        return error.message
    }
}

export const createAttractionCatagory = async (_type:string) => {
    try {
        const attractionCatagory = await prisma.attractionCatagory.create({
            data: {
                type: _type,
            }
        })
        return attractionCatagory
    } catch (error:any) {
        return error.message        
    }
}


export const createAttraction = async (_id:string, _name:string, _address:string, _detail:string, _location:any, _pictures:any, _hotels:any) => {

    try {
        const attraction = await prisma.attraction.create({
            include:{
                pictures:true,
                location:true,
                hotels:true,
            },
            data: {
                attractionCatagoryId: _id, 
                name: _name,
                detail: _detail,
                address: _address,
                location: {
                    create: _location
                },
                pictures: {
                    create: _pictures
                },
                hotels:{
                    create: _hotels
                }
            }
        })
        return attraction
    } catch (error:any) {
        throw(error)
    }
}


export const addAttractionReview = async (_user_id:string, _attraction_id:string, _detail:string, _rating:number) => {
    try {
        const review = await prisma.attractionReview.create({
            data:{
                userId: _user_id,
                attractionId: _attraction_id,
                detail: _detail,
                rating: _rating
            }
        })
        return review
    } catch (error) {
        throw error
    }
}