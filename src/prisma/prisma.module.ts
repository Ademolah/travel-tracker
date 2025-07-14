/* eslint-disable prettier/prettier */
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';





//makes the module globally scoped
@Global()
@Module({
  //registering prisma service in this module
  providers: [PrismaService],

  //makes prismaservice availble to other modules that will import prismaModule
  exports: [PrismaService]
})
export class PrismaModule {}
