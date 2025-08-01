/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { DestinationsModule } from './destinations/destinations.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    PrismaModule,
    AuthModule,
    DestinationsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
