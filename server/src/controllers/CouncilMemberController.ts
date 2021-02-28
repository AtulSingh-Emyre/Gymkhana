/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from 'express';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import creds from '../../client_secret.json';
import { getEnvironmentVariables } from '../environments/env';

// enum Errors {
//   STATUS_401 = 'invalid data provided',
//   STATUS_501 = 'server error,please try again'
// }

export class CouncilMemberController {
  static async getCouncilMembersAll(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const doc = new GoogleSpreadsheet(
        getEnvironmentVariables().spreadSheetLink
      );
      await doc.useServiceAccountAuth(creds);
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
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
}
