import apiClient from '@/request-manager/api-client';

const CREATE_ORDER_URL = '/api/orders';

export const orderRequest = params => 
  apiClient.post(CREATE_ORDER_URL, params);
