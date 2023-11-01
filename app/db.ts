import { PrismaClient } from "@prisma/client";
/* NextJS in development mode: does hot reloading. only send down the files you need to change, reruns without
loading entire app again. 
https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
*/

const prismaClientSingleton = () => {
    return new PrismaClient()
  }
  
  type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>
  
  const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClientSingleton | undefined
  }
  
  const prisma = globalForPrisma.prisma ?? prismaClientSingleton()
  
  export default prisma
  
  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma