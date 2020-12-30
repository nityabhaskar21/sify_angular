import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductnService } from '../productn.service';
import { Product } from '../product';
import { OrdernService } from '../ordern.service';
import { Order } from '../order';
import { UsernService } from '../usern.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {
  products: [{}] = [{}];
  category!: string;
  error!: string;
  msg!: string;
  orderdata: Order = new Order();
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public productnService: ProductnService,
    public ordernService: OrdernService,
    public usernService: UsernService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category');
      this.productnService.viewproductbycat(this.category).subscribe(res => {
        res.data.forEach(d => this.products.push(d));
        console.log(this.products);
      });
    });
  }

  purchase(pid: string): void {
    this.orderdata.buyerid = this.usernService.userid;
    this.orderdata.iscancelled = false;
    this.orderdata.orderstatus = true;
    this.orderdata.productid = pid;

    this.ordernService.placeorder(this.orderdata).subscribe(data => {
      if (data.error) {
        this.error = data.error;
      } else {
        this.msg = 'Order successfully placed!';
      }
    });
  }
}
