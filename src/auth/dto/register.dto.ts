/* eslint-disable prettier/prettier */
import {IsEmail, IsString,  MinLength} from 'class-validator';



export class RegisterDto {
    @IsEmail({}, {message: 'Please provide a valid email address'})
    email: string;

    @IsString()
    @MinLength(6, {message:'Password must be a minimum of 6 characters'})
    password: string;
}