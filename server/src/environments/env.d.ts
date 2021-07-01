export interface Environment {
    db_url: string;
    jwt_secret: string;
    spreadSheetLink: string;
}
export declare function getEnvironmentVariables(): Environment;
