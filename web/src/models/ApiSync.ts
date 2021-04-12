import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    if (data.id !== undefined) {
      return axios.put(`${this.rootUrl}/${data.id}`, data);
    } else {
      return axios.post(`${this.rootUrl}`, data);
    }
  }
}
