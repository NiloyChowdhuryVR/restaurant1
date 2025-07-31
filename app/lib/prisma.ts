// lib/prisma.ts
import { PrismaClient } from '../generated/prisma'; // ✅ Correct (if using alias)

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

//This can sometimes cause error like : Module '"@prisma/client"' has no exported member 'PrismaClient'.ts(2305)
// so just remove all the node_modules and .next
// then npm install to install all the dependencies again 
// then npx prisma generate 
// it will be fine