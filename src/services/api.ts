import axios from 'axios';

const API_URL = 'https://dev.electorq.com/dummy/inventory';

export const fetchInventoryData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
