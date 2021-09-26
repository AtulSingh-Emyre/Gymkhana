import { Document, Model } from 'mongoose';
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
export declare type EventDocument = IEventAddEdit & Document;
declare const Event: Model<EventDocument>;
export default Event;
