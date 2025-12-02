import 'dotenv/config'; 
import { defineConfig } from '@prisma/config';

const DATABASE_URL = process.env.DATABASE_URL ?? process.env.DIRECT_URL;
if (!DATABASE_URL) {
  console.warn('No DATABASE_URL / DIRECT_URL found in environment - prisma may fail');
}

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    url: DATABASE_URL
  }
});