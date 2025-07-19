/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */

import { PartialType } from "@nestjs/mapped-types";
import { DestinationDto } from "./create-destinations.dto";


export class UpdateDestinationDto extends PartialType(DestinationDto){}