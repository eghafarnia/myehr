import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Patient } from './patient.entity';
import { HealthcareProvider } from './healthcareProvider.entity';

@Entity()
export class MedicalRecord {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Patient, patient => patient.medicalRecords)
  patient: Patient;

  @ManyToOne(() => HealthcareProvider, provider => provider.medicalRecords)
  provider: HealthcareProvider;

  @Column()
  diagnosis: string;

  @Column()
  treatment: string;

  @Column({ nullable: true })
  notes: string;
}