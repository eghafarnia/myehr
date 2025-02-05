import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Allergy } from '../../entities/allergy.entity';
import { CreateAllergyDto } from 'src/dto/allergy/create-allergy.dto';
import { UpdateAllergyDto } from 'src/dto/allergy/update-allergy.dto';

@Injectable()
export class AllergyService {
  constructor(
    @InjectRepository(Allergy)
    private readonly allergyRepository: Repository<Allergy>,
  ) {}

  async create(createAllergyDto: CreateAllergyDto): Promise<Allergy> {
    const allergy = this.allergyRepository.create(createAllergyDto);
    return this.allergyRepository.save(allergy);
  }

  async findAll(): Promise<Allergy[]> {
    return this.allergyRepository.find();
  }

  async findOne(id: string): Promise<Allergy> {
    const allergy = await this.allergyRepository.findOne({ where: { id } });
    if (!allergy) {
      throw new NotFoundException(`Allergy with ID ${id} not found`);
    }
    return allergy;
  }

  async update(id: string, updateAllergyDto: UpdateAllergyDto): Promise<Allergy> {
    const allergy = await this.findOne(id);
    this.allergyRepository.merge(allergy, updateAllergyDto);
    return this.allergyRepository.save(allergy);
  }

  async remove(id: string): Promise<void> {
    const allergy = await this.findOne(id);
    await this.allergyRepository.softDelete(allergy);
  }
}