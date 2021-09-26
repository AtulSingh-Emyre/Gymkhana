"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TechEventSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    poster: { type: String, required: false },
    created_at: { type: Date, required: false, default: new Date() },
    updated_at: { type: Date, required: true, default: new Date() }
});
const TechEvent = mongoose_1.model('TechEvent', TechEventSchema);
exports.default = TechEvent;
