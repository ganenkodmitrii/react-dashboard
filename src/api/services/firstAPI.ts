import axios from 'axios';
import { TableProps } from '../../features/teams/TeamsPage';
const BASE_URL_TEAMS = process.env.REACT_APP_BASE_URL;

export const table = {
  getList: async (page = 1) => {
    const { data } = await axios.get(`${BASE_URL_TEAMS}?p=${page}&l=10`);
    return data;
  },

  postItem: async (data: TableProps) => {
    return await axios.post(`${BASE_URL_TEAMS}`, data);
  },

  putItem: async (data: TableProps) => {
    return await axios.put(`${BASE_URL_TEAMS}/${data.id}`, data);
  },

  deleteItem: async (id: string) => {
    return await axios.delete(`${BASE_URL_TEAMS}/${id}`);
  },
};
