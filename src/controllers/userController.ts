import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const alluser = await prisma.user.findMany()
  console.log(alluser)
}
