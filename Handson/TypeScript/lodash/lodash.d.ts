import * as _ from "lodash";

declare module "lodash" {
  interface LoDashStatic {
    chunk<T>(array: T[], size: number): T[][];
  }
}