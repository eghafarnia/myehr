import { IsString, IsDateString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateAppointmentDto {
  @IsUUID()
  @IsNotEmpty()
  patientId: string;

  @IsUUID()
  @IsNotEmpty()
  providerId: string;

  @IsDateString()
  @IsNotEmpty()
  appointmentDate: Date;

  @IsString()
  @IsNotEmpty()
  status: string; // e.g., SCHEDULED, COMPLETED, CANCELLED

  @IsString()
  notes: string;
}