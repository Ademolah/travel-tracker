/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt'
import { LoginDto } from './dto/login.dto';
import { JwtService} from '@nestjs/jwt'


@Injectable()
export class AuthService {
    constructor (
        private prisma: PrismaService, private jwtService: JwtService
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

    async login(loginDto: LoginDto){
        const {email, password} = loginDto

        //check user
        const user = await this.prisma.user.findUnique({
            where: {email}
        })

        if(!user){
            throw new UnauthorizedException('Invalid User')
        }

        //verify password
        const isPassword = await bcrypt.compare(password, user.password)

        if(!isPassword){
            throw new UnauthorizedException("Invalid login credential")
        }

        //create access token
        const token = this.jwtService.sign({
            userId: user.id,
            email: user.email
        })

        const {password: _, ...result} = user

        return {result, token}


    }
}



//this is the file that handles the business logic
