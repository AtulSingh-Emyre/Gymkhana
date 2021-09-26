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
exports.Server = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const nodemailer_1 = __importDefault(require("nodemailer"));
//server file imports
const env_1 = require("./environments/env");
const EventRouter_1 = __importDefault(require("./routers/EventRouter"));
const UserRouter_1 = __importDefault(require("./routers/UserRouter"));
const ContactRouter_1 = __importDefault(require("./routers/ContactRouter"));
const ContactEmail_1 = require("./middlewares/ContactEmail");
const TechEventRouter_1 = __importDefault(require("./routers/TechEventRouter"));
const path_1 = __importDefault(require("path"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'build')));
        this.setConfigurations();
        this.setRoutes();
        // this.error404Handler();
        // this.handleErrors();
        this.app.get('*', function (req, res) {
            res.sendFile(path_1.default.join(__dirname, 'build', 'index.html'));
        });
    }
    setConfigurations() {
        this.connectMongoDb();
        this.configureBodyParser();
        this.configureNodemailer();
        this.app.use(cors_1.default());
        console.log('Configurations have been successfully setup');
    }
    configureBodyParser() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        console.log('body-parser setup');
    }
    connectMongoDb() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const databaseUrl = env_1.getEnvironmentVariables().db_url;
                mongoose_1.default.connect(databaseUrl, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false
                });
                mongoose_1.default.connection.on('open', () => {
                    console.log('connection successfully made with database');
                });
            }
            catch (error) {
                console.log(error);
                this.connectMongoDb();
            }
        });
    }
    configureNodemailer() {
        const contactEmail = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: 'contact.gymkhana.iitdh@gmail.com',
                pass: 'contact2$2$'
            }
        });
        contactEmail.verify((error) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Ready to Send');
            }
        });
        const nodemailerData = ContactEmail_1.ContactEmail.getInstance();
        nodemailerData.setContactEmail(contactEmail);
    }
    setRoutes() {
        this.app.use('/events', EventRouter_1.default);
        this.app.use('/user', UserRouter_1.default);
        this.app.use('/contact', ContactRouter_1.default);
        this.app.use('/tech', TechEventRouter_1.default);
    }
}
exports.Server = Server;
