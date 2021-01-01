import { Component, OnInit } from '@angular/core';
import { UsernService } from '../usern.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startupregister',
  templateUrl: './startupregister.component.html',
  styleUrls: ['./startupregister.component.css']
})
export class StartupregisterComponent implements OnInit {
  constructor(public usernService: UsernService, public router: Router) {}

  ngOnInit(): void {
    if (
      this.usernService.username != undefined ||
      this.usernService.username.length > 0
    ) {
      this.router.navigateByUrl('/home');
    }
  }
}
