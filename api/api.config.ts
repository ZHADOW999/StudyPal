// api.ts
import axios, { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

interface RefreshResponse {
  access: string;
  refresh?: string;
}

const api = axios.create({
  baseURL: 'http://192.168.116.101:8000', // Using the IP from the error log
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 10000, // 10 second timeout
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

    // Check for token expiration (adjust condition as per your backend)
    if (
      error.response?.status === 401 &&
      error.response.data?.code === 'token_not_valid' &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const refreshToken = await AsyncStorage.getItem('refreshToken');
        if (refreshToken) {
          const response = await api.post<RefreshResponse>('/token/refresh', {
            refresh: refreshToken,
          });
          const newAccessToken = response.data.access;
          console.log('New Access Token:', newAccessToken);
          await AsyncStorage.setItem('authToken', newAccessToken);
          if (response.data.refresh) {
            await AsyncStorage.setItem('refreshToken', response.data.refresh);
          }
          api.defaults.headers['Authorization'] = `Bearer ${newAccessToken}`;
          originalRequest.headers = originalRequest.headers || {};
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        // Emit navigation event for sign-up on refresh failure
        // emitter.emit('navigateSignUp');
        return Promise.reject(refreshError);
      }
    }

    // For any other 401 errors, clear tokens and navigate to sign-up
    if (error.response?.status === 401) {
      await AsyncStorage.removeItem('authToken');
      await AsyncStorage.removeItem('refreshToken');
    //   emitter.emit('navigateSignUp');
    }

    return Promise.reject(error);
  }
);

export default api;
