import $axios from 'axios';

const axios = $axios.create();

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export default axios;
