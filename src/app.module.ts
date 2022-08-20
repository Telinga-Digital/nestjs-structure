import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import { PrismaModule } from './database/prisma.module';
import authConfig from './config/auth.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig, authConfig],
      envFilePath: ['.env'],
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
