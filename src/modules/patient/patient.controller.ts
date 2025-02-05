// src/modules/patient/patient.controller.ts
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
  import { PatientService } from './patient.service';
  import { CreatePatientDto } from 'src/dto/patient/create-patient.dto';
  import { UpdatePatientDto } from 'src/dto/patient/update-patient.dto';

  @ApiTags('Patients')
  @Controller('patients')
  export class PatientController {
    constructor(private readonly patientService: PatientService) {}
  
    @Post()
    @ApiOperation({ summary: 'Create a new patient' })
    @ApiResponse({ status: 201, description: 'Patient created successfully.' })
    async create(@Body() createPatientDto: CreatePatientDto) {
      return this.patientService.create(createPatientDto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Get all patients' })
    @ApiResponse({ status: 200, description: 'List of patients.' })
    async findAll() {
      return this.patientService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Get a patient by ID' })
    @ApiParam({ name: 'id', description: 'Patient ID' })
    @ApiResponse({ status: 200, description: 'Patient details.' })
    @ApiResponse({ status: 404, description: 'Patient not found.' })
    async findOne(@Param('id') id: string) {
      return this.patientService.findOne(id);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Update a patient by ID' })
    @ApiParam({ name: 'id', description: 'Patient ID' })
    @ApiResponse({ status: 200, description: 'Patient updated successfully.' })
    @ApiResponse({ status: 404, description: 'Patient not found.' })
    async update(
      @Param('id') id: string,
      @Body() updatePatientDto: UpdatePatientDto,
    ) {
      return this.patientService.update(id, updatePatientDto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Delete a patient by ID' })
    @ApiParam({ name: 'id', description: 'Patient ID' })
    @ApiResponse({ status: 204, description: 'Patient deleted successfully.' })
    @ApiResponse({ status: 404, description: 'Patient not found.' })
    async remove(@Param('id') id: string) {
      return this.patientService.remove(id);
    }
  }