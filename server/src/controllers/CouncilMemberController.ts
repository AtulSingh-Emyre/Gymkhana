/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from 'express';
import { getSheet } from '../middlewares/spreadsheet-reader';
import { CouncilSchema } from '../models/client/CouncilSchema';
const readXlsxFile = require('read-excel-file/node');

export class CouncilMemberController {
  static async getCouncilMembersAllCurrent(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const t = await readXlsxFile('./src/Assets/council.xlsx', {
        schema: CouncilSchema,
        sheet: 1
      });
      if (t.errors.length != 0)
        throw new Error('Something went wrong, please try again');
      res.status(200).json({
        data: t.rows,
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
      const query = req.params.query;
      const t = await readXlsxFile('./src/Assets/council.xlsx', {
        schema: CouncilSchema,
        sheet: 1
      });
      const data: any = [];
      t.forEach((row: any) => {
        if (row.post === query || row.council === query) data.push(row);
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
