import { Document, Model } from 'mongoose';
interface ITechEvent {
    title: string;
    description: string;
    poster: string;
    created_at: Date;
    updated_at: Date;
}
export declare type TechEventDocument = ITechEvent & Document;
declare const TechEvent: Model<TechEventDocument>;
export default TechEvent;
