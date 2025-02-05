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
  import { InsuranceService } from './insurance.service';
  import { CreateInsuranceDto } from 'src/dto/insurance/create-insurance.dto';
  import { UpdateInsuranceDto } from 'src/dto/insurance/update-insurance.dto';
  
  @ApiTags('Insurances')
  @Controller('insurances')
  export class InsuranceController {
    constructor(private readonly insuranceService: InsuranceService) {}
  
    @Post()
    @ApiOperation({ summary: 'Create a new insurance' })
    @ApiResponse({ status: 201, description: 'Insurance created successfully.' })
    async create(@Body() createInsuranceDto: CreateInsuranceDto) {
      return this.insuranceService.create(createInsuranceDto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Get all insurances' })
    @ApiResponse({ status: 200, description: 'List of insurances.' })
    async findAll() {
      return this.insuranceService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Get an insurance by ID' })
    @ApiParam({ name: 'id', description: 'Insurance ID' })
    @ApiResponse({ status: 200, description: 'Insurance details.' })
    @ApiResponse({ status: 404, description: 'Insurance not found.' })
    async findOne(@Param('id') id: string) {
      return this.insuranceService.findOne(id);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Update an insurance by ID' })
    @ApiParam({ name: 'id', description: 'Insurance ID' })
    @ApiResponse({ status: 200, description: 'Insurance updated successfully.' })
    @ApiResponse({ status: 404, description: 'Insurance not found.' })
    async update(
      @Param('id') id: string,
      @Body() updateInsuranceDto: UpdateInsuranceDto,
    ) {
      return this.insuranceService.update(id, updateInsuranceDto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Delete an insurance by ID' })
    @ApiParam({ name: 'id', description: 'Insurance ID' })
    @ApiResponse({ status: 204, description: 'Insurance deleted successfully.' })
    @ApiResponse({ status: 404, description: 'Insurance not found.' })
    async remove(@Param('id') id: string) {
      return this.insuranceService.remove(id);
    }
  }