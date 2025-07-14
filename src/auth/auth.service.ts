/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor (
        private prisma: PrismaService
    ) {}

    //register user
    async register(registerDto: RegisterDto){
        const {email, password} = registerDto

        //check if user exists
        const isexistUser = await this.prisma.user.findUnique({
            where: {email}
        })

        if(isexistUser){
            throw new ConflictException('User already exist')
        }

        //hash the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt) 

        //create new user
        const newUser = await this.prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            }
        })


        //remove password from the returned object
        const {password: _, ...result} = newUser
        return result
    }
}



//this is the file that handles the business logic
