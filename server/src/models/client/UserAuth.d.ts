import { Document, Model } from 'mongoose';
interface IUserAuth {
    identifier: string;
    position: string;
    clubs: string[];
}
export declare type UserDocument = IUserAuth & Document;
declare const User: Model<UserDocument>;
export default User;
