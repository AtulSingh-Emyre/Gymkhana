"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    identifier: { type: String, required: true },
    position: { type: String, required: true },
    clubs: { type: Array, required: true }
});
const User = mongoose_1.model('User', UserSchema);
exports.default = User;
