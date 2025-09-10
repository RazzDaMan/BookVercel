import type {PrismaConfig} from "prisma";

// import your .env file
import "dotenv/config";

export default {
  migrations: {
    seed: 'tsx prisma/seed.ts',
  }
} satisfies PrismaConfig;