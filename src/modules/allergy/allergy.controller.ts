import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    NotFoundException,
  } from '@nestjs/common';
  import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
  import { AllergyService } from './allergy.service';
  import { CreateAllergyDto } from 'src/dto/allergy/create-allergy.dto';
  import { UpdateAllergyDto } from 'src/dto/allergy/update-allergy.dto';
  
  @ApiTags('Allergies')
  @Controller('allergies')
  export class AllergyController {
    constructor(private readonly allergyService: AllergyService) {}
  
    @Post()
    @ApiOperation({ summary: 'Create a new allergy' })
    @ApiResponse({ status: 201, description: 'Allergy created successfully.' })
    async create(@Body() createAllergyDto: CreateAllergyDto) {
      return this.allergyService.create(createAllergyDto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Get all allergies' })
    @ApiResponse({ status: 200, description: 'List of allergies.' })
    async findAll() {
      return this.allergyService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Get an allergy by ID' })
    @ApiParam({ name: 'id', description: 'Allergy ID' })
    @ApiResponse({ status: 200, description: 'Allergy details.' })
    @ApiResponse({ status: 404, description: 'Allergy not found.' })
    async findOne(@Param('id') id: string) {
      return this.allergyService.findOne(id);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Update an allergy by ID' })
    @ApiParam({ name: 'id', description: 'Allergy ID' })
    @ApiResponse({ status: 200, description: 'Allergy updated successfully.' })
    @ApiResponse({ status: 404, description: 'Allergy not found.' })
    async update(
      @Param('id') id: string,
      @Body() updateAllergyDto: UpdateAllergyDto,
    ) {
      return this.allergyService.update(id, updateAllergyDto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Delete an allergy by ID' })
    @ApiParam({ name: 'id', description: 'Allergy ID' })
    @ApiResponse({ status: 204, description: 'Allergy deleted successfully.' })
    @ApiResponse({ status: 404, description: 'Allergy not found.' })
    async remove(@Param('id') id: string) {
      return this.allergyService.remove(id);
    }
  }