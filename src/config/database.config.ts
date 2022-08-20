import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  default: process.env.DB_CONNECTION || 'mysql',
  connections: {
    mysql: {
      driver: 'mysql',
      url: process.env.DB_URL,
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 3306,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'nestjs',
    },
    postgres: {
      driver: 'postgres',
      url: process.env.DB_URL,
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'nestjs',
    },
  },
}));
