export const InventorySchema = {
  Id: { prop: 'id', type: Number },
  Council: { prop: 'council', type: String },
  Club: { prop: 'club', type: String },
  Item: { prop: 'item', type: String },
  Quantity: { prop: 'qty', type: Number },
  Description: { prop: 'desc', type: String },
  Date_Added: { prop: 'created_at', type: Date }
};
