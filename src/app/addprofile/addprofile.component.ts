import { Component, OnInit, ViewChild } from '@angular/core';
import { Profileuser } from '../profileuser';
import { UsernService } from '../usern.service';
import { NgForm } from '@angular/forms';
import { Editprofile } from '../editprofile';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.css']
})
export class AddprofileComponent implements OnInit {
  data!: any;
  username: string;
  error!: string;
  msg!: string;
  edit;
  @ViewChild('frm')
  form: NgForm;

  constructor(public usernService: UsernService) {
    this.username = this.usernService.username;
  }

  ngOnInit(): void {
    if (!this.usernService) {
      this.error = 'Login Please!';
    } else {
      this.usernService.getprofile(this.username).subscribe(data => {
        this.data = data.pdata;
      });
    }
  }

  addprofile() {
    this.usernService.addprofile(this.data, this.username).subscribe(data => {
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
