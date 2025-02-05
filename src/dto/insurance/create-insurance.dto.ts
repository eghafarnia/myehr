import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateInsuranceDto {
  @IsUUID()
  @IsNotEmpty()
  patientId: string;

  @IsString()
  @IsNotEmpty()
  providerName: string;

  @IsString()
  @IsNotEmpty()
  policyNumber: string;

  @IsString()
  @IsNotEmpty()
  coverageDetails: string;
}