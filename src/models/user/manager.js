import Http from '../http';

require('dotenv').config({ path: './../../.env' });

const create = async (user) => Http.post('/api/users/store', user)
  .then((resp) => resp).catch((error) => {
    if (error.message.includes('419')) {
      console.log('token mismatch');
    }
    return error;
  });

const UserManager = { create };

export default UserManager;
