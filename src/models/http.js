import axios from 'axios';

require('dotenv').config({ path: './../../.env' });

const baseURL = process.env.VUE_APP_API_URL || 'http://localhost:8000';

const getHeaders = async () => ({
  'X-CSRF-TOKEN': await axios.get(`${baseURL}/api/get-cross-ref-token`).then((resp) => resp.data),
  'X-Requested-With': 'XMLHttpRequest',
});


const Http = axios.create({
  baseURL,
  headers: getHeaders(),
});

export default Http;
