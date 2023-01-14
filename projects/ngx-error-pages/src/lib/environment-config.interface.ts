import { ErrorPageData } from "./error-page-data.interface";

export interface EnvironmentConfig {
  errorPage: ErrorPageData;
  notFoundPage: ErrorPageData;
}
