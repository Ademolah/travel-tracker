/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DestinationDto } from './dto/create-destinations.dto';
import { UpdateDestinationDto } from './dto/update.destination.dto';

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

    async findAll(userId: number){
        return this.prisma.destination.findMany({
            where: {userId},
        })
    }

    async findOne(userId: number, id: number){
        const destination = await this.prisma.destination.findFirst({
            where: {id, userId},
        });

        if(!destination){
            throw new NotFoundException(`Destination not found with id ${id}`)
        }

        return destination
    }

    async delete(userId: number, id: number){
        await this.findOne(userId, id)

        return this.prisma.destination.delete({
            where: {id}
        })
    }

    async update(userId: number, id: number, updateDestinationDto: UpdateDestinationDto){
        await this.findOne(userId, id)

        return this.prisma.destination.update({
            where: {id},
            data: updateDestinationDto
        })
    }
}


//business logic
