/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express';
import { InventorySchema } from '../models/client/Inventory';
import reader from 'xlsx';

export class InventoryController {
  static async getAllInventory(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const file = reader.readFile('./src/Assets/council.xlsx');
      const t = reader.utils.sheet_to_json(file.Sheets[2]);
      res.status(200).json({
        data: t,
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
  static async getInventorysQueried(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const query = req.params.query;
      const file = reader.readFile('./src/Assets/council.xlsx');
      const t = reader.utils.sheet_to_json(file.Sheets[2]);
      const data: any = [];
      t.forEach((row: any) => {
        if (row.club === query || row.council === query) data.push(row);
      });
      res.status(200).json({
        data,
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
  static async postNewInventoryItem(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = new Date() + '' + req.body.id;
      const details = req.body.det;
      const newItem = { id, ...details };
      const file = reader.readFile('./src/Assets/council.xlsx');
      const t = reader.utils.sheet_to_json(file.Sheets[2]);
      const data: any = [newItem];
      t.forEach((row: any) => {
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
