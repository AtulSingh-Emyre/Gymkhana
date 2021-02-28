import { Document, Model, model, Schema } from 'mongoose';

const councilMemberList = {
  '2021': {
    gsTech: {
      name: 'Atul Singh',
      email: 'atulsingh.pks@gmail.com'
    },
    gsSport: {
      name: 'Yogesh S Thube'
    },
    gsAcad: {
      name: 'M. Sai Harsha'
    },
    gsCult: { 
      name: 'Gowri Y Subedar'
    }
  }
};

enum CouncilPosts {
  gsTech = 'General Secretary, Technical Affairs',
  gsCult = 'General Secretary, Cultural Affairs',
  gsSport = 'General Secretary, Sports Affairs',
  gsAcad = 'General Secretary, Academic Affairs'
}

interface ICouncilMember {
  name: string;
  email: string;
  year: number;
  post: string;
}

export type CouncilMemberDocument = ICouncilMember & Document;

const CouncilMemberSchema: Schema = new Schema({
  analyst: {
    type: Schema.Types.ObjectId,
    ref: 'AnalystUserProfile',
    required: true
  },
  stockName: { type: String, required: true },
  price: { type: Number, required: false },
  buy: { type: Boolean, required: true },
  comparator: { type: String, required: false },
  T1: {
    type: Number,
    required: false
  },
  T2: {
    type: Number,
    required: false
  },
  T3: {
    type: Number,
    required: false
  },
  SL: { type: Number, required: false },
  possibility: { type: Number, required: false, default: 50 },
  description: { type: String, required: false },
  isIntraday: { type: Boolean, required: false },
  validTill: { type: Date, required: false },
  isFree: { type: Boolean, required: false },
  subscibeClient: { type: Array, required: false },
  subscriptionPrice: { type: Number },
  isActive: { type: Boolean, default: true },
  created_at: { type: Date, required: false, default: new Date() },
  updated_at: { type: Date, required: true, default: new Date() },
  created_by: { type: String, required: true },
  like: { type: Array, default: [] }
});

const CouncilMember: Model<CouncilMemberDocument> = model(
  'CouncilMember',
  CouncilMemberSchema
);

export default CouncilMember;
