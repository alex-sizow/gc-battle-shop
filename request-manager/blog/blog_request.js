import apiClient from "@/request-manager/api-client";

const CREATE_BLOG_URL = "/api/orders";

const blogRequest = (params) => apiClient.post(CREATE_BLOG_URL, params);
