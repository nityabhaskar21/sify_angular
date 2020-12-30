import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrdernService {
  constructor(public http: HttpClient) {}

  placeorder(order: Order): Observable<any> {
    return this.http.post(`http://localhost:8080/order/addproductid`, order);
  }
}
