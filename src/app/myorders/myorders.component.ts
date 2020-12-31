import { Component, OnInit } from '@angular/core';
import { OrdernService } from '../ordern.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  orderdata!: [];
  msg!: string;
  error!: string;

  constructor(public ordernService: OrdernService) {}

  ngOnInit(): void {
    this.ordernService.getorderbybidb().subscribe(data => {
      this.orderdata = data.odata;
      console.log(this.orderdata);
    });
  }
}
