import { FiltersState } from '../../types';

export const LOAD_FILTERS = 'LOAD_FILTERS';
export function loadFilters(filters: FiltersState) {
  return { filters, type: LOAD_FILTERS };
}

export const UPDATE_FILTER = 'UPDATE_FILTER';
export function updateFilter(name: string, value: string) {
  return { name, type: UPDATE_FILTER, value };
}
