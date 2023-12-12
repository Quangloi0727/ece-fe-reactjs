import axios from 'axios';
import { getItem, setItem } from '../../utility/localStorageControl';
import { MESSAGE_GET_TOKEN_FAIL, LOCAL_STORAGE_VARIABLE } from '../../constants/index';

const API_ENDPOINT = `${process.env.REACT_APP_BE_API_ENDPOINT}/api`;

const authHeader = () => ({
  Authorization: `Bearer ${getItem(LOCAL_STORAGE_VARIABLE.USER_DATA)?.token}`,
});

const client = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    Authorization: `Bearer ${getItem(LOCAL_STORAGE_VARIABLE.USER_DATA)?.token}`,
    'Content-Type': 'application/json',
  },
});

class DataService {
  static get(path = '') {
    return client({
      method: 'GET',
      url: path,
      headers: { ...authHeader() },
    });
  }

  static delete(path = '') {
    return client({
      method: 'DELETE',
      url: path,
      headers: { ...authHeader() },
    });
  }

  static post(path = '', data = {}, optionalHeader = {}) {
    return client({
      method: 'POST',
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader },
    });
  }

  static patch(path = '', data = {}) {
    return client({
      method: 'PATCH',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() },
    });
  }

  static put(path = '', data = {}) {
    return client({
      method: 'PUT',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() },
    });
  }
}

/**
 * axios interceptors runs before and after a request, letting the developer modify req,req more
 * For more details on axios interceptor see https://github.com/axios/axios#interceptors
 */
client.interceptors.request.use((config) => {
  // do something before executing the request
  // For example tag along the bearer access token to request header or set a cookie
  const requestConfig = config;
  const { headers } = config;
  requestConfig.headers = { ...headers, Authorization: `Bearer ${getItem(LOCAL_STORAGE_VARIABLE.USER_DATA)?.token}` };

  return requestConfig;
});

client.interceptors.response.use(
  (response) => response,
  async (error) => {
    /**
     * Do something in case the response returns an error code [3**, 4**, 5**] etc
     * For example, on token expiration retrieve a new access token, retry a failed request etc
     */
    const { response } = error;
    const originalRequest = error.config;
    if (response) {
      if (response.status === 401 && response.data.errors[0].message === MESSAGE_GET_TOKEN_FAIL) {
        localStorage.clear();
        window.location.href = '/login';
      }
      if (response.status === 401) {
        const refreshToken = getItem(LOCAL_STORAGE_VARIABLE.USER_DATA)?.refreshToken;
        const responseRefreshToken = await DataService.post('/auth/refresh-token', { refreshToken });
        setItem(LOCAL_STORAGE_VARIABLE.USER_DATA, {
          token: responseRefreshToken?.data?.data?.token,
          refreshToken: responseRefreshToken?.data?.data?.refreshToken,
          isLogin: true,
        });
        originalRequest.headers.Authorization = `Bearer ${responseRefreshToken?.data?.data?.token}`;
        return axios(originalRequest);
      }
      return response;
    }
    return Promise.reject(error);
  },
);
export { DataService };
