import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsernService } from '../usern.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewallusers',
  templateUrl: './viewallusers.component.html',
  styleUrls: ['./viewallusers.component.css']
})
export class ViewallusersComponent implements OnInit {
  users: User[] = [];

  constructor(public usernService: UsernService) {}

  ngOnInit(): void {
    this.usernService.viewallusers().subscribe(data => {
      console.log(data);
      this.users = data.doc.filter(
        d => d.username != this.usernService.username
      );
    });
  }
}
