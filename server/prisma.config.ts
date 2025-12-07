// prisma.config.ts
import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  // Migrate (and other CLI/runtime tools) will read the URL from here:
  datasource: {
    url: env('DATABASE_URL'), // <- keep your DB URL in .env
  },
});
