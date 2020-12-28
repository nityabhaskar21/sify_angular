import { Component, OnInit } from '@angular/core';
import { Profileuser } from '../profileuser';
import { UsernService } from '../usern.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  profileuser: Profileuser = new Profileuser();
  data!: any;
  username: 'sly21';

  constructor(public usernService: UsernService) {}

  ngOnInit(): void {
    this.usernService.getprofile('sly21').subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}
