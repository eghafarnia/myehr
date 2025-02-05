import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Appointment } from './appointment.entity';
import { MedicalRecord } from './medicalRecord.entity';

@Entity()
export class HealthcareProvider {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: string; // e.g., DOCTOR, NURSE, HOSPITAL

  @Column()
  contactNumber: string;

  @Column()
  address: string;

  @OneToMany(() => Appointment, appointment => appointment.provider)
  appointments: Appointment[];

  @OneToMany(() => MedicalRecord, medicalRecord => medicalRecord.provider)
  medicalRecords: MedicalRecord[];
}