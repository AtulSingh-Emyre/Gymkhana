/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express';
import { InventorySchema } from '../models/client/Inventory';
const readXlsxFile = require('read-excel-file/node');

export class InventoryController {
  static async getAllInventory(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const t = await readXlsxFile('./src/Assets/council.xlsx', {
        schema: InventorySchema,
        sheet: 3
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
      if (t.errors.length != 0)
        throw new Error('Something went wrong, please try again');

      const data: any = [];
      t.rows.forEach((row: any) => {
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
      const t = await readXlsxFile('./src/Assets/council.xlsx', {
        schema: prevCouncil,
        sheet: 2
      });
      if (t.errors.length != 0)
        throw new Error('Something went wrong, please try again');

      const query = req.params.query;
      const year = req.params.year;
      const data: any = [];
      t.rows.forEach((row: any) => {
        if (year != 'all') {
          if (
            (row.Post === query || row.Council === query || query === 'all') &&
            row.Year === parseInt(year)
          )
            data.push(row);
        } else {
          if (row.Post === query || row.Council === query || query === 'all')
            data.push(row);
        }
      });
      res.status(200).json({
        data: t.rows,
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
}
