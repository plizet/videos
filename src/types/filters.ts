export interface SelectType {
  options: Array<string>;
  value: string;
}

export interface Filters {
  categories: SelectType;
  years: SelectType;
}

export interface FiltersState {
  [key: string]: SelectType;
}
