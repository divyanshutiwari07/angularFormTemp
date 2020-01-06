import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getServerData(obj) {
    console.log('api service');
    return this.http.post(config.STORE_INFO_URL, obj);
  }
  getSavedData() {
    console.log('api service');
    return this.http.get(config.ALL_DATA_URL);
  }

  deleteUser(obj) {
    console.log('api service');
    return this.http.post(config.DELETE_USER_DATA_URL, obj);
  }
}
