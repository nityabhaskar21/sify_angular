import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdernService } from '../ordern.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editreview',
  templateUrl: './editreview.component.html',
  styleUrls: ['./editreview.component.css']
})
export class EditreviewComponent implements OnInit {
  data!: any;
  error!: string;
  msg!: string;
  oid!: string;
  edit;
  @ViewChild('frm')
  form: NgForm;

  constructor(
    public ordernService: OrdernService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.oid = params.get('oid');
      this.ordernService.orderdetailsbyoid(this.oid).subscribe(data => {
        this.data = data.doc1;
        console.log(this.data);
      });
    });
  }
  editreview() {
    let req = { rating: '', review: '', orderid: '' };
    req.rating = this.data.rating;
    req.review = this.data.review;
    req.orderid = this.data._id;
    this.ordernService.editreview(req).subscribe(data => {
      if (data.error) {
        this.error = data.error;
      } else {
        this.msg = data.msg;
      }
    });

    this.data = {};
    this.form.reset();
  }
}
