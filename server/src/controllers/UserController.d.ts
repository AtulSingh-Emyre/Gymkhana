import { Request, Response, NextFunction } from 'express';
export declare class UserController {
    static getAllEvents(req: Request, res: Response, next: NextFunction): Promise<void>;
    static getEventsCurrent(req: Request, res: Response, next: NextFunction): Promise<void>;
    static getEventsPrevious(req: Request, res: Response, next: NextFunction): Promise<void>;
    static login(req: Request, res: Response, next: NextFunction): Promise<Response<any> | undefined>;
}
