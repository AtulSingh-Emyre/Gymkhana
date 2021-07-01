"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EventSchema = new mongoose_1.Schema({
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
const Event = mongoose_1.model('EventAddEdit', EventSchema);
exports.default = Event;
