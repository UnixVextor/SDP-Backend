import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getUser = async  () => {
  // ... you will write your Prisma Client queries here
  const alluser = await prisma.user.findMany()
  console.log(alluser)
};
