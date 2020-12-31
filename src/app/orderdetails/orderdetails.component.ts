import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductnService } from '../productn.service';
import { Product } from '../product';
import { OrdernService } from '../ordern.service';
import { Order } from '../order';
import { UsernService } from '../usern.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  products!: any;
  oid!: string;
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
      this.oid = params.get('oid');
      this.ordernService.vieworderdetails(this.oid).subscribe(res => {
        this.products = res.doc1;
        console.log(this.products);
      });
    });
  }
}
