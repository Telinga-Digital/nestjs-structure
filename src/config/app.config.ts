import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  env: process.env.NODE_ENV || 'development',
  name: process.env.APP_NAME || 'NestJS',
  debug: process.env.APP_DEBUG || false,
  timezone: process.env.APP_TIMEZONE || 'UTC',
  locale: process.env.APP_LOCALE || 'en-US',
  port: parseInt(process.env.APP_PORT || process.env.PORT, 10) || 3000,
  version: process.env.APP_VERSION || '1.0.0',
}));
