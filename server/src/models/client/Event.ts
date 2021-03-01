import { Document, model, Model, Schema } from 'mongoose';

interface IEventAddEdit {
  title: string;
  start: Date;
  end: Date;
  poster: string;
  results: string;
  description: string;
  council: string;
  host: string[];
  created_at: Date;
  updated_at: Date;
}

export type EventDocument = IEventAddEdit & Document;

const EventSchema: Schema = new Schema({
  title: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  poster: { type: String, required: true },
  results: { type: String, required: true },
  description: { type: String, required: true },
  council: { type: String, required: true },
  host: { type: Array, required: true },
  created_at: { type: Date, required: false, default: new Date() },
  updated_at: { type: Date, required: true, default: new Date() }
});

const Event: Model<EventDocument> = model('EventAddEdit', EventSchema);
export default Event;
