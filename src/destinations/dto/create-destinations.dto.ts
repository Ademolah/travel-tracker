/* eslint-disable prettier/prettier */


import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class DestinationDto{
    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsDateString()
    travelDate: Date

    @IsOptional()
    @IsString()
    notes: string

}