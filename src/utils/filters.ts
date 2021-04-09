import { Properties } from 'types/common';

export const defaultFilters: Properties = {
  page: 1,
  limit: process.env.REACT_APP_BASE_URL_LIMIT || 10,
};
