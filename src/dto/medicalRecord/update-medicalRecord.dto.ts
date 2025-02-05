import { PartialType } from '@nestjs/swagger';
import { CreateMedicalRecordDto } from './create-medicalRecord.dto';

export class UpdateMedicalRecordDto extends PartialType(CreateMedicalRecordDto) {}