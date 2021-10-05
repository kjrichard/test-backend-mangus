import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';

export class EditRoleDto extends PartialType(
    OmitType(CreateRoleDto, ['created_at'] as const ),
    ){}