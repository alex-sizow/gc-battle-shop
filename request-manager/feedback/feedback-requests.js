import apiClient from '@/request-manager/api-client';

const CREATE_FEEDBACK_URL = '/api/feedbacks';

export const feedbackRequest = params => 
  apiClient.post(CREATE_FEEDBACK_URL, params);
