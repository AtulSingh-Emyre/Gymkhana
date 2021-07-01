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
exports.EventController = void 0;
const Event_1 = __importDefault(require("../models/client/Event"));
const moment_1 = __importDefault(require("moment"));
class EventController {
    static getAllEvents(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.params.data;
                const skipAndSplit = data.split(' ');
                console.log(data);
                const resp = yield Event_1.default.find({})
                    .sort({ start: -1 })
                    .skip(parseInt(skipAndSplit[0]))
                    .limit(parseInt(skipAndSplit[1]));
                console.log(resp);
                res.status(200).json({
                    data: resp,
                    success: true
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getEventsCurrent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield Event_1.default.find({
                    start: { $gt: moment_1.default().subtract({ day: 1 }).toDate() }
                }).sort({ start: -1 });
                res.status(200).json({
                    data: resp,
                    success: true
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getEventsPrevious(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield Event_1.default.find({
                    start: { $lt: moment_1.default().toDate() }
                }).sort({ start: -1 });
                res.status(200).json({
                    data: resp,
                    success: true
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static postNewEvent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const event = req.body.postData;
                const newEvent = yield new Event_1.default(Object.assign(Object.assign({}, event), { created_at: new Date(), updated_at: new Date() }));
                yield newEvent.save();
                res.status(200).json({
                    success: true
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static updateEvents(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const updatedEvent = req.body.data;
                const eventId = req.body.id;
                console.log(updatedEvent, eventId);
                const result = yield Event_1.default.findOneAndUpdate({ _id: eventId }, Object.assign(Object.assign({}, updatedEvent), { updated_at: new Date() }), { new: true });
                res.status(200).json({
                    success: true,
                    data: result
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static deleteEvents(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const queryParam = req.params.id;
                yield Event_1.default.findByIdAndDelete(queryParam);
                res.status(200).json({
                    success: true
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.EventController = EventController;
