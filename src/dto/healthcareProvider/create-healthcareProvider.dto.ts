import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

export enum ProviderType {
  DOCTOR = 'DOCTOR',
  NURSE = 'NURSE',
  HOSPITAL = 'HOSPITAL',
}

export class CreateHealthcareProviderDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(ProviderType)
  @IsNotEmpty()
  type: ProviderType;

  @IsString()
  @IsNotEmpty()
  contactNumber: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}