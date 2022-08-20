import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrapper');

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      ignoreTrailingSlash: true,
    }),
  );

  const config = app.get<ConfigService>(ConfigService);

  const port = config.get<number>('app.port');

  await app.listen(port);

  logger.log(`Application listening on port ${port}`);
}
bootstrap();
