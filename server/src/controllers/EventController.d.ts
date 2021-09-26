import { Request, Response, NextFunction } from 'express';
export declare class EventController {
    static getAllEvents(req: Request, res: Response, next: NextFunction): Promise<void>;
    static getEventsCurrent(req: Request, res: Response, next: NextFunction): Promise<void>;
    static getEventsPrevious(req: Request, res: Response, next: NextFunction): Promise<void>;
    static postNewEvent(req: Request, res: Response, next: NextFunction): Promise<void>;
    static updateEvents(req: Request, res: Response, next: NextFunction): Promise<void>;
    static deleteEvents(req: Request, res: Response, next: NextFunction): Promise<void>;
}
