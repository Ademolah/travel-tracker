/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: {expiresIn: '30m'},
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
