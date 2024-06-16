import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'http://devapp.bonusmoney.pro/mobileapp',
  timeout: 10000,
  timeoutErrorMessage: 'Timeout expired',
  headers: { TOKEN: '123' },
};

export class ApiCompanyServices {
  static post<T, K>(url: string, body: K): Promise<T> {
    return axios
      .post(url, body, config)
      .then((res: AxiosResponse) => res.data as T);
  }
}
