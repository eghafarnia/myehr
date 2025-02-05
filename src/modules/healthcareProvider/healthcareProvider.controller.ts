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
  import { HealthcareProviderService } from './healthcareProvider.service';
  import { CreateHealthcareProviderDto } from 'src/dto/healthcareProvider/create-healthcareProvider.dto';
  import { UpdateHealthcareProviderDto } from 'src/dto/healthcareProvider/update-healthcareProvider.dto';
  
  @ApiTags('HealthcareProviders')
  @Controller('healthcare-providers')
  export class HealthcareProviderController {
    constructor(private readonly healthcareProviderService: HealthcareProviderService) {}
  
    @Post()
    @ApiOperation({ summary: 'Create a new healthcare provider' })
    @ApiResponse({ status: 201, description: 'Healthcare provider created successfully.' })
    async create(@Body() createHealthcareProviderDto: CreateHealthcareProviderDto) {
      return this.healthcareProviderService.create(createHealthcareProviderDto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Get all healthcare providers' })
    @ApiResponse({ status: 200, description: 'List of healthcare providers.' })
    async findAll() {
      return this.healthcareProviderService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Get a healthcare provider by ID' })
    @ApiParam({ name: 'id', description: 'Healthcare provider ID' })
    @ApiResponse({ status: 200, description: 'Healthcare provider details.' })
    @ApiResponse({ status: 404, description: 'Healthcare provider not found.' })
    async findOne(@Param('id') id: string) {
      return this.healthcareProviderService.findOne(id);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Update a healthcare provider by ID' })
    @ApiParam({ name: 'id', description: 'Healthcare provider ID' })
    @ApiResponse({ status: 200, description: 'Healthcare provider updated successfully.' })
    @ApiResponse({ status: 404, description: 'Healthcare provider not found.' })
    async update(
      @Param('id') id: string,
      @Body() updateHealthcareProviderDto: UpdateHealthcareProviderDto,
    ) {
      return this.healthcareProviderService.update(id, updateHealthcareProviderDto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Delete a healthcare provider by ID' })
    @ApiParam({ name: 'id', description: 'Healthcare provider ID' })
    @ApiResponse({ status: 204, description: 'Healthcare provider deleted successfully.' })
    @ApiResponse({ status: 404, description: 'Healthcare provider not found.' })
    async remove(@Param('id') id: string) {
      return this.healthcareProviderService.remove(id);
    }
  }