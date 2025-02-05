import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Patient } from './patient.entity';

@Entity()
export class Allergy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Patient, patient => patient.allergies)
  patient: Patient;

  @Column()
  allergen: string;

  @Column()
  reaction: string;

  @Column()
  severity: string; // e.g., MILD, MODERATE, SEVERE

  @Column({ nullable: true })
  notes: string;
}