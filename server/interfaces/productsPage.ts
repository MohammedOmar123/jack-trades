export type TStrOrStrArr = string | string[];

export interface IArguments {
  limit: number;
  offset: number;
  category?: TStrOrStrArr;
  type?: TStrOrStrArr;
  date?: string;
  search?: TStrOrStrArr;
}
