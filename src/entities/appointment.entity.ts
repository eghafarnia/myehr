import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Patient } from './patient.entity';
import { HealthcareProvider } from './healthcareProvider.entity';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Patient, patient => patient.appointments)
  patient: Patient;

  @ManyToOne(() => HealthcareProvider, provider => provider.appointments)
  provider: HealthcareProvider;

  @Column()
  appointmentDate: Date;

  @Column()
  status: string; // e.g., SCHEDULED, COMPLETED, CANCELLED

  @Column({ nullable: true })
  notes: string;
}