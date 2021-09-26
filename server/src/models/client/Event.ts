import { Document, model, Model, Schema } from 'mongoose';

interface IEventAddEdit {
  title: string;
  council: string;
  start: Date;
  end: Date;
  organiser: string[];
  description: string;
  venue: string;
  poster?: string;
  result?: string;
  notice: boolean;
  allDay: boolean;
  created_at: Date;
  updated_at: Date;
}

export type EventDocument = IEventAddEdit & Document;

const EventSchema: Schema = new Schema({
  title: { type: String, required: true },
  council: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  organizer: { type: Array, required: true },
  description: { type: String, required: true },
  venue: { type: String, required: true },
  poster: { type: String, required: false },
  result: { type: String, required: false },
  notice: { type: Boolean, required: true, default: false },
  allDay: { type: Boolean, required: true, default: false },
  created_at: { type: Date, required: false, default: new Date() },
  updated_at: { type: Date, required: true, default: new Date() }
});

const Event: Model<EventDocument> = model('EventAddEdit', EventSchema);
export default Event;
