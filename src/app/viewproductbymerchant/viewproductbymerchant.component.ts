import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductnService } from '../productn.service';
import { Product } from '../product';
import { OrdernService } from '../ordern.service';
import { Order } from '../order';
import { UsernService } from '../usern.service';

@Component({
  selector: 'app-viewproductbymerchant',
  templateUrl: './viewproductbymerchant.component.html',
  styleUrls: ['./viewproductbymerchant.component.css']
})
export class ViewproductbymerchantComponent implements OnInit {
  products: [{}] = [{}];
  uid!: string;
  error!: string;
  msg!: string;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public productnService: ProductnService,
    public ordernService: OrdernService,
    public usernService: UsernService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.uid = params.get('mid');
      this.productnService.viewproductbymerchant(this.uid).subscribe(res => {
        this.products = res;
        console.log(this.products);
      });
    });
  }
}
