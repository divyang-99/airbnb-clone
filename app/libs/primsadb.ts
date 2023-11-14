/**
 * This module initializes and exports a PrismaClient instance for database access.
 * It ensures that only a single instance of PrismaClient is created and reused throughout
 * the application lifecycle, particularly in a development environment. This pattern is 
 * known as the Singleton pattern and is beneficial for efficiently managing resources like
 * database connections. This is a best practice for using Prisma in Next.js applications.
 */

import { PrismaClient } from "@prisma/client";

// Extend the NodeJS global type with the prisma property to be either PrismaClient or undefined.
declare global {
    var prisma: PrismaClient | undefined;
}

// Either use the existing global prisma instance or create a new one if it doesn't exist.
const client = globalThis.prisma || new PrismaClient();

// When not in production, reassign the client to the global prisma to enable hot-reloading.
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

// Export the PrismaClient instance for use in the application.
export default client;
