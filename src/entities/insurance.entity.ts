import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Patient } from './patient.entity';

@Entity()
export class Insurance {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Patient, patient => patient.insurances)
  patient: Patient;

  @Column()
  providerName: string;

  @Column()
  policyNumber: string;

  @Column()
  coverageDetails: string;
}