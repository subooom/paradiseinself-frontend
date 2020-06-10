const set = (key, value) => {
  if (typeof (Storage) !== 'undefined') {
    localStorage.setItem(key, value);
    return true;
  }
  return false;
};

const get = (key) => {
  if (typeof (Storage) !== 'undefined') {
    return localStorage.getItem(key);
  }
  return false;
};

const LocalStorage = { set, get };

export default LocalStorage;
