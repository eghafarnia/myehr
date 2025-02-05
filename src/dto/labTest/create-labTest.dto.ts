import { IsString, IsNotEmpty, IsUUID, IsDateString } from 'class-validator';

export class CreateLabTestDto {
  @IsUUID()
  @IsNotEmpty()
  patientId: string;

  @IsUUID()
  @IsNotEmpty()
  providerId: string;

  @IsString()
  @IsNotEmpty()
  testName: string;

  @IsDateString()
  @IsNotEmpty()
  testDate: Date;

  @IsString()
  @IsNotEmpty()
  results: string;

  @IsString()
  notes: string;
}