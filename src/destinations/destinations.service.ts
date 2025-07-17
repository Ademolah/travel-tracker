/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DestinationDto } from './dto/create-destinations.dto';

@Injectable()
export class DestinationsService {
    constructor(private prisma: PrismaService){}

    async create(userId: number, createDestinationDto: DestinationDto){
        return this.prisma.destination.create({
            data:{
                ...createDestinationDto,
                travelDate: new Date(createDestinationDto.travelDate).toISOString(),
                userId
            }
        })
    }
}


//business logic
