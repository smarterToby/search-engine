import { PrismaClient } from "@prisma/client";

let db: PrismaClient;
if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
} else {
  // @ts-expect-error
  if (!global.prisma) {
    // @ts-expect-error
    global.prisma = new PrismaClient();
  }
  // @ts-expect-error
  db = global.prisma;
}

export default db;
