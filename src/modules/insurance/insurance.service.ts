import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Insurance } from '../../entities/insurance.entity';
import { CreateInsuranceDto } from 'src/dto/insurance/create-insurance.dto';
import { UpdateInsuranceDto } from 'src/dto/insurance/update-insurance.dto';

@Injectable()
export class InsuranceService {
  constructor(
    @InjectRepository(Insurance)
    private readonly insuranceRepository: Repository<Insurance>,
  ) {}

  async create(createInsuranceDto: CreateInsuranceDto): Promise<Insurance> {
    const insurance = this.insuranceRepository.create(createInsuranceDto);
    return this.insuranceRepository.save(insurance);
  }

  async findAll(): Promise<Insurance[]> {
    return this.insuranceRepository.find();
  }

  async findOne(id: string): Promise<Insurance> {
    const insurance = await this.insuranceRepository.findOne({ where: { id } });
    if (!insurance) {
      throw new NotFoundException(`Insurance with ID ${id} not found`);
    }
    return insurance;
  }

  async update(id: string, updateInsuranceDto: UpdateInsuranceDto): Promise<Insurance> {
    const insurance = await this.findOne(id);
    this.insuranceRepository.merge(insurance, updateInsuranceDto);
    return this.insuranceRepository.save(insurance);
  }

  async remove(id: string): Promise<void> {
    const insurance = await this.findOne(id);
    await this.insuranceRepository.remove(insurance);
  }
}