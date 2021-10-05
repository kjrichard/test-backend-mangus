import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';

export class EditClientDto extends PartialType(
    OmitType(CreateClientDto, ['created_at'] as const ),
    ){}