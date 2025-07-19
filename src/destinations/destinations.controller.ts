/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DestinationsService } from './destinations.service';
import { DestinationDto } from './dto/create-destinations.dto';

@Controller('destinations')
@UseGuards(JwtAuthGuard)
export class DestinationsController {
    constructor(private readonly destinationService: DestinationsService){}

    @Post()
    async create(@Request() req, @Body() createDestinationDto: DestinationDto){
        return this.destinationService.create(req.user.userId, createDestinationDto)
    }

    @Get('/fetchall')
    async findAll(@Request() req){
        return this.destinationService.findAll(req.user.userId)
    }

    @Get('/:id')
    async findOne(@Request() req, @Param('id') id: string){
        return this.destinationService.findOne(req.user.userId, +id)
    }

    @Delete('/:id')
    async deleteOne(@Request() req,  @Param('id') id: string){
        return this.destinationService.removeDestination(req.user.userId ,+id)
    }

    @Patch('/:id')
    async update(@Request() req, @Param('id') id: string, @Body() updateDestinationDto: DestinationDto){
        return this.destinationService.update(req.user.userId, +id, updateDestinationDto)
    }
}
