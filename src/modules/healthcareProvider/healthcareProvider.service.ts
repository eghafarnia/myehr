import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HealthcareProvider } from '../../entities/healthcareProvider.entity';
import { CreateHealthcareProviderDto } from 'src/dto/healthcareProvider/create-healthcareProvider.dto';
import { UpdateHealthcareProviderDto } from 'src/dto/healthcareProvider/update-healthcareProvider.dto';

@Injectable()
export class HealthcareProviderService {
  constructor(
    @InjectRepository(HealthcareProvider)
    private readonly healthcareProviderRepository: Repository<HealthcareProvider>,
  ) {}

  async create(createHealthcareProviderDto: CreateHealthcareProviderDto): Promise<HealthcareProvider> {
    const provider = this.healthcareProviderRepository.create(createHealthcareProviderDto);
    return this.healthcareProviderRepository.save(provider);
  }

  async findAll(): Promise<HealthcareProvider[]> {
    return this.healthcareProviderRepository.find();
  }

  async findOne(id: string): Promise<HealthcareProvider> {
    const provider = await this.healthcareProviderRepository.findOne({ where: { id } });
    if (!provider) {
      throw new NotFoundException(`HealthcareProvider with ID ${id} not found`);
    }
    return provider;
  }

  async update(id: string, updateHealthcareProviderDto: UpdateHealthcareProviderDto): Promise<HealthcareProvider> {
    const provider = await this.findOne(id);
    this.healthcareProviderRepository.merge(provider, updateHealthcareProviderDto);
    return this.healthcareProviderRepository.save(provider);
  }

  async remove(id: string): Promise<void> {
    const provider = await this.findOne(id);
    await this.healthcareProviderRepository.remove(provider);
  }
}