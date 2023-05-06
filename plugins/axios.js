import { setClient } from '@/request-manager/api-client';

export default function({ $axios }) {

  if (process?.server) {
    $axios.defaults.baseURL = process.env.API_BASE_URL;
  };

  setClient($axios);
}