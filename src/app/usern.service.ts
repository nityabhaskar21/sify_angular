import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Loginuser } from './loginuser';
import { Profileuser } from './profileuser';

@Injectable({
  providedIn: 'root'
})
export class UsernService {
  isLogged: string;
  username: string;
  constructor(public http: HttpClient) {}

  adduser(user: User): Observable<any> {
    return this.http.post(`http://localhost:8080/signup`, user);
  }

  viewallusers(): Observable<any> {
    return this.http.get('http://localhost:8080/users');
  }

  loginuser(loginuser: Loginuser): Observable<any> {
    return this.http.post('http://localhost:8080/login', loginuser);
  }

  getprofile(username: string): Observable<any> {
    return this.http.get(`http://localhost:8080/${username}/profile`);
  }
}
