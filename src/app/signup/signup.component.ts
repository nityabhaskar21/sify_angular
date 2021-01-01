import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user';
import { UsernService } from '../usern.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = new User();
  msg!: string;
  error!: string;
  @ViewChild('frm')
  form: NgForm;
  constructor(public usernService: UsernService, public router: Router) {}
  ngOnInit(): void {}
  add() {
    this.usernService.adduser(this.user).subscribe(data => {
      if (data.error) {
        this.error = data.error;
      } else {
        this.msg = data.msg;
        this.usernService.addusernameid(data.doc.username, data.doc._id);
        this.router.navigateByUrl('/home');
      }
    });

    this.user = new User();
    this.form.reset();
  }
}
