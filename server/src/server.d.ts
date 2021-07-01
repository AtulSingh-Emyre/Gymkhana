import express from 'express';
export declare class Server {
    app: express.Application;
    constructor();
    setConfigurations(): void;
    configureBodyParser(): void;
    connectMongoDb(): Promise<void>;
    configureNodemailer(): void;
    setRoutes(): void;
}
