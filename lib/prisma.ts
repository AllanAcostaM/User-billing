// lib/prisma.ts
import { PrismaClient } from "@prisma/client/extension";

declare global {
  // allow global `var` across reloads in dev
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "info", "warn", "error"]
        : ["error"],
  });

if (process.env.NODE_ENV === "development") {
  globalForPrisma.prisma = prisma;
}
