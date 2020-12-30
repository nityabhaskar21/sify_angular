import { Component } from '@angular/core';
import { UsernService } from './usern.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showme: boolean = false;
  title = 'sify-client';
  username: string;
  userid: string;

  constructor(public usernService: UsernService) {}
  ngOnInit(): void {
    this.username = this.usernService.username;
    this.userid = this.usernService.userid;
  }
}
