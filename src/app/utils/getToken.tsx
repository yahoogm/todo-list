export const getToken = (key: string) => {
  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem(key);
    return token;
  } else {
    return null;
  }
};
