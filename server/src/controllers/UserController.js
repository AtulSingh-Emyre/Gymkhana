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
exports.UserController = void 0;
const Event_1 = __importDefault(require("../models/client/Event"));
const moment_1 = __importDefault(require("moment"));
class UserController {
    static getAllEvents(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield Event_1.default.find({
                    organiser: { $all: req.body.clubs }
                }).sort({ start: -1 });
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
                    start: { $gt: moment_1.default().subtract({ day: 1 }).toDate() },
                    organiser: { $all: req.body.clubs }
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
                    start: { $lt: moment_1.default().toDate() },
                    organiser: { $all: req.body.clubs }
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
    static login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const iden = req.body.iden;
                const valid = [
                    'gstech',
                    'gssports',
                    'gscult',
                    'gsacad',
                    'gsha',
                    'messcommittee',
                    '190020020'
                ];
                if (valid.includes(iden)) {
                    return res.status(200).json({
                        success: true
                    });
                }
                else
                    return res.status(200).json({
                        success: false,
                        mssg: 'unauthorized access'
                    });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.UserController = UserController;
