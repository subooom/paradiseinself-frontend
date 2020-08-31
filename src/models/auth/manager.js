import Http from '../http';

const getLoggedInStatus = () => Http.get('/api/auth/is-logged-in').then((resp) => resp.data['is-logged-in']).catch((error) => error);

const isNewUser = (email) => Http.get(`/api/auth/is-new-user/${email}`).then((resp) => resp.data).catch((error) => error);

const login = (id) => Http.get(`/api/auth/sign-in/${id}`).then((resp) => resp.data).catch((error) => error);

const isUsernameUnique = (username) => Http.get(`/api/auth/is-username-unique/${username}`).then((resp) => resp.data['is-username-unique']).catch((error) => error);

const AuthManager = {
  getLoggedInStatus,
  isNewUser,
  login,
  isUsernameUnique,
};

export default AuthManager;
