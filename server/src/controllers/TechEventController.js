"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechEventController = void 0;
const TechCouncilEvents_1 = __importDefault(require("../models/TechCouncilEvents"));
class TechEventController {
    static postEvent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = req.body;
                const newEvent = yield new TechCouncilEvents_1.default(Object.assign(Object.assign({}, post), { created_at: new Date(), updated_at: new Date() }));
                yield newEvent.save();
                res.json({ success: true });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getEvent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newEvent = yield TechCouncilEvents_1.default.find({})
                    .limit(10)
                    .sort({ created_at: -1 });
                res.json({ success: true, data: newEvent });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static editEvent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = req.body;
                yield TechCouncilEvents_1.default.findByIdAndUpdate(req.body.id, post);
                res.json({ success: true });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static deleteEvent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield TechCouncilEvents_1.default.findByIdAndDelete(req.body.id);
                res.json({ success: true });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.TechEventController = TechEventController;
