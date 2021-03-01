import {
  GoogleSpreadsheet,
  GoogleSpreadsheetWorksheet
} from 'google-spreadsheet';
import creds from '../../client_secret.json';
import { getEnvironmentVariables } from '../environments/env';

export const getSheet = async (
  index: number
): Promise<GoogleSpreadsheetWorksheet> => {
  const doc = new GoogleSpreadsheet(getEnvironmentVariables().spreadSheetLink);
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[index];
  return sheet;
};
