import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalVariables } from '../../global';

@Injectable({
  providedIn: 'root'
})
export class OrderStatusService {

  private API = GlobalVariables.API;

  constructor(private httpClient: HttpClient) { }

  public getOrders(): Observable<any> {
    const url = this.API + '/api/orders';
    return this.httpClient.get(url);
  }
}
