import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const getAllUser = async () => {
  const alluser = await prisma.user.findMany();
  return alluser;
};

export const getUserById = async (_id: string) => {
    try{
      const user = await prisma.user.findUnique({
        where: {
          id: _id
        }
      });
      return user;
    }catch(err){
      return err;
    }
}

export const createUser = async (_firstname:string, _lastname:string, _username:string, _password:string) => {
    try{
      const user = await prisma.user.create({
        data: {
          firstname: _firstname,
          lastname: _lastname,
          username: _username,
          hashPassword: _password,
        }
      });
      return user;
    }catch(err){
      return err
    }
}

// export const addToken = async (_id:string, _token:string) => {
//   try{
//     const user = await prisma.user.update({
//       where: {
//         id: id,
//         token: _token,
//       }
//     });
//     return user;
//   }catch(err){
//     return err
//   }
// }

export const getUserByUsername = async (_username: string) => {
    try{
      const user = await prisma.user.findFirst({
        where: {
          username: _username
        }
      })
      if (user == null)
        return null
      return user;
    }catch(err){
      return err;
    }
}



