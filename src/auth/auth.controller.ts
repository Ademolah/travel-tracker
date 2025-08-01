/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('/register-user')
    async register(@Body() registerDto: RegisterDto){
        return this.authService.register(registerDto)
    }

    @Post('/login')
    async login(@Body() loginDto: LoginDto){
        return this.authService.login(loginDto)
    }
}



//this controller file is equivalent of route file in express
