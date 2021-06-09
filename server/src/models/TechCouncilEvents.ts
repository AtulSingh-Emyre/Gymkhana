import { Document, model, Model, Schema } from 'mongoose';

interface ITechEvent {
  title: string;
  description: string;
  poster: string;
  created_at: Date;
  updated_at: Date;
}

export type TechEventDocument = ITechEvent & Document;

const TechEventSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  poster: { type: String, required: false },
  created_at: { type: Date, required: false, default: new Date() },
  updated_at: { type: Date, required: true, default: new Date() }
});

const TechEvent: Model<TechEventDocument> = model('TechEvent', TechEventSchema);
export default TechEvent;
