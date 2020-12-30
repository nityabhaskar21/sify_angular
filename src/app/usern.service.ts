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
  username: string;
  userid: string;
  constructor(public http: HttpClient) {
    this.username = localStorage.getItem('username');
    this.userid = localStorage.getItem('userid');
  }

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

  addprofile(profileuser: Profileuser, uname: string): Observable<any> {
    return this.http.post(
      `http://localhost:8080/${uname}/addprofile`,
      profileuser
    );
  }

  logoutuser(): void {
    this.username = '';
    localStorage.setItem('username', '');
    localStorage.setItem('userid', '');
  }

  addusernameid(uname: string, uid: string) {
    this.username = uname;
    localStorage.setItem('username', uname);
    localStorage.setItem('userid', uid);
  }
}
