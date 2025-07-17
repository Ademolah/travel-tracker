/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";



@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){}