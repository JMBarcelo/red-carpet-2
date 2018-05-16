import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable()
export class UserSessionService {
  user: any;
  options: any = { withCredentials: true };

  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  handleUser(user?: object) {
    this.user = user;
    return this.user;
  }

  getUsers() {
    return this.http
      .get(`http://localhost:3000/api/user`, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(error => Observable.throw(error.json().message));
  }

  getThisUser(user) {
    return this.http
      .post(`http://localhost:3000/api/user/session`, user, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(error => Observable.throw(error.json().message));
  }

  isLoggedIn() {
    return this.http
      .get(`http://localhost:3000/api/user/session`, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(error => Observable.throw(error.json().message));
  }

  signup(user) {
    return this.http
      .post(`http://localhost:3000/api/user/signup`, user, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(error => Observable.throw(error.json().message));
  }

  login(user) {
    return this.http
      .post(`http://localhost:3000/api/user/login`, user, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(error => Observable.throw(error.json().message));
  }

  update(user) {
    return this.http
      .put(`http://localhost:3000/api/user/update/${user._id}`, user, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(error => Observable.throw(error.json().message));
  }

  erase(user) {
    return this.http
      .delete(`http://localhost:3000/api/user`, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(error => Observable.throw(error.json().message));
  }

  logout() {
    return this.http
      .get(`http://localhost:3000/api/user/logout`, this.options)
      .map(res => res.json())
      .map(() => this.handleUser())
      .catch(error => Observable.throw(error.json().message));
  }
}