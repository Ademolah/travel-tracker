/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { Injectable, type OnModuleInit ,type OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma/client';
// import { PrismaClient } from '@prisma/client';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    async onModuleInit(){
        await this.$connect()
    }

    async onModuleDestroy() {
        await this.$disconnect()
    }
}


