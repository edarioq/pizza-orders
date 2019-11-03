import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  API = "http://localhost:5000";

  constructor(
    private httpClient: HttpClient
  ) {}

  public getData(): Observable<any> {
    const url = this.API + '/api/prices';
    return this.httpClient.get(url);
  }

}
