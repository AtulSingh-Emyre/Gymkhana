/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from 'express';
import { getSheet } from '../middlewares/google-spreadsheet';

export class CouncilMemberController {
  static async getCouncilMembersAllCurrent(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const sheet = await getSheet(0);
      const rows = await sheet.getRows();
      const data: any = {};
      rows.forEach((row: any) => {
        data[row.Council] = {
          ...data[row.Council],
          [row.Post]: {
            name: row.Name,
            image: row.Image,
            email: row.Email,
            phone: row.Phone,
            website: row.Website
          }
        };
      });
      res.status(200).json({
        data,
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
  static async getCouncilMembersCurrentQueried(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const sheet = await getSheet(0);
      const query = req.params.query;
      const rows = await sheet.getRows();
      const data: any = {};
      rows.forEach((row: any) => {
        if (row.Post === query || row.Council === query)
          data[row.Council] = {
            ...data[row.Council],
            [row.Post]: {
              name: row.Name,
              image: row.Image,
              email: row.Email,
              phone: row.Phone,
              website: row.Website
            }
          };
      });
      res.status(200).json({
        data,
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
  static async getCouncilMemberPrevQueried(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const sheet = await getSheet(1);
      const query = req.params.query;
      const year = req.params.year;
      const rows = await sheet.getRows();
      const data: any = {};
      rows.forEach((row: any) => {
        if (
          (row.Post === query || row.Council === query || query === 'all') &&
          row.Year === year
        )
          data[row.Council] = {
            ...data[row.Council],
            [row.Post]: {
              name: row.Name,
              email: row.Email,
              phone: row.Phone,
              website: row.Website
            }
          };
      });
      res.status(200).json({
        data,
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
}
