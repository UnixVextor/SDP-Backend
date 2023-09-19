import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllUser = async () => {
  const alluser = await prisma.user.findMany();
  return alluser;
};

export const createUser = async () => {
    
}
