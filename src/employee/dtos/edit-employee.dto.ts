import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';


export class EditEmployeeDto extends PartialType(
    OmitType(CreateEmployeeDto, ['created_at'] as const ),
    ){}