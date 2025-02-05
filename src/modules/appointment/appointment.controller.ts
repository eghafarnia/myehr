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
  import { AppointmentService } from './appointment.service';
  import { CreateAppointmentDto } from 'src/dto/appointment/create-appointment.dto';
  import { UpdateAppointmentDto } from 'src/dto/appointment/update-appointment.dto';
  
  @ApiTags('Appointments')
  @Controller('appointments')
  export class AppointmentController {
    constructor(private readonly appointmentService: AppointmentService) {}
  
    @Post()
    @ApiOperation({ summary: 'Create a new appointment' })
    @ApiResponse({ status: 201, description: 'Appointment created successfully.' })
    async create(@Body() createAppointmentDto: CreateAppointmentDto) {
      return this.appointmentService.create(createAppointmentDto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Get all appointments' })
    @ApiResponse({ status: 200, description: 'List of appointments.' })
    async findAll() {
      return this.appointmentService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Get an appointment by ID' })
    @ApiParam({ name: 'id', description: 'Appointment ID' })
    @ApiResponse({ status: 200, description: 'Appointment details.' })
    @ApiResponse({ status: 404, description: 'Appointment not found.' })
    async findOne(@Param('id') id: string) {
      return this.appointmentService.findOne(id);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Update an appointment by ID' })
    @ApiParam({ name: 'id', description: 'Appointment ID' })
    @ApiResponse({ status: 200, description: 'Appointment updated successfully.' })
    @ApiResponse({ status: 404, description: 'Appointment not found.' })
    async update(
      @Param('id') id: string,
      @Body() updateAppointmentDto: UpdateAppointmentDto,
    ) {
      return this.appointmentService.update(id, updateAppointmentDto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Delete an appointment by ID' })
    @ApiParam({ name: 'id', description: 'Appointment ID' })
    @ApiResponse({ status: 204, description: 'Appointment deleted successfully.' })
    @ApiResponse({ status: 404, description: 'Appointment not found.' })
    async remove(@Param('id') id: string) {
      return this.appointmentService.remove(id);
    }
  }