const set = (key, value) => {
    if (typeof (Cookie) !== 'undefined') {
      document.cookie.key = value;
      return true;
    }
    return false;
  };

  const get = (key) => {
    if (typeof (Cookie) !== 'undefined') {
      return document.cookie.key;
    }
    return false;
  };

  const Cookie = { set, get };

  export default Cookie;
