/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
export class AuthSetup {
  static async isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const bearerHeader = req.headers.authorization;
    console.log(bearerHeader);

    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      jwt.verify(bearerToken, 'asdf', (err: any, authdata: any) => {
        console.log(authdata);
        if (err) {
          res.status(403).json({
            status: 'error',
            data: {},
            error: 'user not logged in',
            success: 'user logged in'
          });
        } else next();
      });
    } else {
      res.status(403).json({
        status: 'error',
        data: {},
        error: 'user not logged in',
        success: 'user logged in'
      });
    }
  }
}
