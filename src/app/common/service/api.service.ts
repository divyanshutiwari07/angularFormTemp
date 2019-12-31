import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getServerData(obj) {
    console.log('api service');
    return this.http.post('http://localhost:2000/testing', obj);
  }
  getSavedData() {
    console.log('api service');
    return this.http.get('http://localhost:2000/all');
  }
  
}
