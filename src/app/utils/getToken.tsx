export const getToken = (key: string) => {
  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem(key);
    return token;
  } else {
    return null;
  }
};

export const getUserDetail = (key: string) => {
  if (typeof localStorage !== 'undefined') {
    const user = localStorage.getItem(key);
    return user;
  } else {
    return null;
  }
};
