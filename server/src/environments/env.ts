/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ProdEnvironment } from './prod.env';
import { DevEnvironment } from './dev.env';

export interface Environment {
  db_url: string;
  jwt_secret: string;
  spreadSheetLink: string;
}

export function getEnvironmentVariables() {
  if (process.env.NODE_ENV === 'production') {
    return ProdEnvironment;
  } else {
    return DevEnvironment;
  }
}
