import apiClient from '@/request-manager/api-client';

const CREATE_CALLBACK_URL = '/api/callback-requests';

export const callbackRequest = params => 
  apiClient.post(CREATE_CALLBACK_URL, params);
