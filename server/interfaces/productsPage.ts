export type TStrOrStrArr = string | string[];

export interface Args {
  title?: TStrOrStrArr;
  category_id: string[];
  type: TStrOrStrArr
}

export interface IArguments {
  limit: number;
  offset: number;
  date: string;
  args: Args
}
