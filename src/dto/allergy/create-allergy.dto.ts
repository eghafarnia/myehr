import { IsString, IsNotEmpty, IsUUID, IsEnum } from 'class-validator';

export enum Severity {
  MILD = 'MILD',
  MODERATE = 'MODERATE',
  SEVERE = 'SEVERE',
}

export class CreateAllergyDto {
  @IsUUID()
  @IsNotEmpty()
  patientId: string;

  @IsString()
  @IsNotEmpty()
  allergen: string;

  @IsString()
  @IsNotEmpty()
  reaction: string;

  @IsEnum(Severity)
  @IsNotEmpty()
  severity: Severity;

  @IsString()
  notes: string;
}