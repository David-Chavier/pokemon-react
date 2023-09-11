import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});

export const doGet = async (url: string) => {
  try {
    const response = await api.get(url);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, trace: error };
  }
};
