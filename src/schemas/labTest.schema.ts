import { Schema, Document } from 'mongoose';

export const LabTestSchema = new Schema({
  patientId: { type: String, required: true },
  providerId: { type: String, required: true },
  testName: { type: String, required: true },
  testDate: { type: Date, required: true },
  results: { type: String, required: true },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export interface LabTest extends Document {
  patientId: string;
  providerId: string;
  testName: string;
  testDate: Date;
  results: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}