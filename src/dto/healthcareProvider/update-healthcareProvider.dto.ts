import { PartialType } from '@nestjs/swagger';
import { CreateHealthcareProviderDto } from './create-healthcareProvider.dto';

export class UpdateHealthcareProviderDto extends PartialType(CreateHealthcareProviderDto) {}