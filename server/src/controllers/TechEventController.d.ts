import { Request, Response, NextFunction } from 'express';
export declare class TechEventController {
    static postEvent(req: Request, res: Response, next: NextFunction): Promise<void>;
    static getEvent(req: Request, res: Response, next: NextFunction): Promise<void>;
    static editEvent(req: Request, res: Response, next: NextFunction): Promise<void>;
    static deleteEvent(req: Request, res: Response, next: NextFunction): Promise<void>;
}
