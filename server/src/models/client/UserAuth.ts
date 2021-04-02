import { Document, model, Model, Schema } from 'mongoose';

interface IUserAuth {
  identifier: string;
  position: string;
  clubs: string[];
}

export type UserDocument = IUserAuth & Document;

const UserSchema: Schema = new Schema({
  identifier: { type: String, required: true },
  position: { type: String, required: true },
  clubs: { type: Array, required: true }
});

const User: Model<UserDocument> = model('User', UserSchema);
export default User;
