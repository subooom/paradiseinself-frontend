import Http from '../http';

require('dotenv').config({ path: './../../.env' });

const baseURL = process.env.VUE_APP_API_URL || 'http://localhost:8000';

const getCrossRefToken = () => Http.get(`${baseURL}/api/get-cross-ref-token`).then((resp) => resp);

const FormManager = { getCrossRefToken };

export default FormManager;
