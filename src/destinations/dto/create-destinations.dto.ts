/* eslint-disable prettier/prettier */


import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class DestinaionDto{
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