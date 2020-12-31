import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order } from './order';
import { UsernService } from './usern.service';

@Injectable({
  providedIn: 'root'
})
export class OrdernService {
  constructor(public http: HttpClient, public usernService: UsernService) {}

  placeorder(order: Order): Observable<any> {
    return this.http.post(`http://localhost:8080/order/addproductid2`, order);
  }

  getorderbybidb(): Observable<any> {
    return this.http.get(
      `http://localhost:8080/order/viewordersbybuyerid/${this.usernService.userid}`
    );
  }
  vieworderdetails(oid: string): Observable<any> {
    return this.http.get(`http://localhost:8080/order/vieworderdetails/${oid}`);
  }
}
