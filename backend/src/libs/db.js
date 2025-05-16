import {prismaClient} from "../generated/prisma/index.js";


const  globalForPrisma = globalThis;

export  const db = globalForPrisma || new PrismaClient();

if(Process.env.NODE_ENV !== "production") globalForPrisma.prisma=db;
