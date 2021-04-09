import axios from 'libs/axios';
import { default as queryString } from 'query-string';
import { Properties } from 'types/common';
import { TeamsProps } from 'types/teams';

export const teams = {
  getList: async (query: Properties) => {
    const { data } = await axios.get(
      queryString.stringifyUrl(
        {
          url: `/teams`,
          query,
        },
        { skipEmptyString: true, skipNull: true },
      ),
    );

    return data;
  },
  add: async (data: TeamsProps) => {
    return await axios.post(`/teams`, data);
  },

  edit: async (data: TeamsProps) => {
    return await axios.put(`/teams/${data.id}`, data);
  },

  remove: async (id: string) => {
    return await axios.delete(`/teams/${id}`);
  },
};
