import { PartialType } from '@nestjs/swagger';
import { CreateLabTestDto } from './create-labTest.dto';

export class UpdateLabTestDto extends PartialType(CreateLabTestDto) {}