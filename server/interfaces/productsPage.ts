export type TStrOrStrArr = string | string[];

export interface IArguments {
  limit: number;
  offset: number;
  category?: any;
  type?: TStrOrStrArr;
  date?: string;
  search?: TStrOrStrArr;
}
