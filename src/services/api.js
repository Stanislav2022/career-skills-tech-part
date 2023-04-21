import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6442593733997d3ef90dde3d.mockapi.io/api/v1/users',
});

export const fetchContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};
