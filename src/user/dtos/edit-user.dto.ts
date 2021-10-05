import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';


export class EditUserDto extends PartialType(OmitType(
    CreateUserDto, ['created_at', 'username'] as const ), ){}