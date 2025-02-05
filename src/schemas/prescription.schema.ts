import { Schema, Document } from 'mongoose';

export const PrescriptionSchema = new Schema({
  patientId: { type: String, required: true },
  providerId: { type: String, required: true },
  medicationName: { type: String, required: true },
  dosage: { type: String, required: true },
  frequency: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export interface Prescription extends Document {
  patientId: string;
  providerId: string;
  medicationName: string;
  dosage: string;
  frequency: string;
  startDate: Date;
  endDate: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}