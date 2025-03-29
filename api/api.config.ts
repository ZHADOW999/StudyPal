// api.ts
import axios, { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import emitter from '@/lib/NavigationEmmiter';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

interface RefreshResponse {
  access: string;
  refresh_token?: string;
}

const api = axios.create({
  baseURL: 'http://192.168.116.101:8000',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 10000,
});

// Add request logging
api.interceptors.request.use(
  (config) => {
    console.log('Request:', {
      url: config.url,
      method: config.method,
      data: config.data,
      headers: config.headers,
      baseURL: config.baseURL
    });
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response logging
api.interceptors.response.use(
  (response) => {
    console.log('Response:', {
      status: response.status,
      data: response.data
    });
    return response;
  },
  (error) => {
    console.error('Response error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    return Promise.reject(error);
  }
);

// Request interceptor: Attach access token from AsyncStorage
api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    const token = await AsyncStorage.getItem('authToken');
    if (token) {
      config.headers = config.headers || {};
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: Handle token refresh and unauthorized redirects
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<any>) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;

    // Check for token expiration or blacklist
    if (
      error.response?.status === 401 &&
      (error.response.data?.code === 'token_not_valid' || error.response.data?.detail === 'Token is blacklisted')
    ) {
      // Clear tokens and redirect to sign-up
      await AsyncStorage.removeItem('authToken');
      await AsyncStorage.removeItem('refreshToken');
      
      // If we're not already on the sign-up page, emit navigation event
      if (!originalRequest.url?.includes('/sign-up')) {
        emitter.emit('navigateSignUp');
      }
    }

    return Promise.reject(error);
  }
);

export default api;
