import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Allergy } from './allergy.entity';
import { Appointment } from './appointment.entity';
import { Insurance } from './insurance.entity';
import { MedicalRecord } from './medicalRecord.entity';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  gender: string;

  @Column()
  contactNumber: string;

  @Column()
  address: string;

  @OneToMany(() => Allergy, allergy => allergy.patient)
  allergies: Allergy[];

  @OneToMany(() => Appointment, appointment => appointment.patient)
  appointments: Appointment[];

  @OneToMany(() => Insurance, insurance => insurance.patient)
  insurances: Insurance[];

  @OneToMany(() => MedicalRecord, medicalRecord => medicalRecord.patient)
  medicalRecords: MedicalRecord[];
}