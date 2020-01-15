import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Category } from './category';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient : HttpClient) { }

  findCategory()  {
    //const params = new HttpParams().set('track', track).set('id', id);
    return this.httpClient.get<Category[]>('http://localhost:8088/categories');
  }
}
