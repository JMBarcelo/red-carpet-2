import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { environment }  from '../../environments/environment';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable()
export class UserSessionService {
  
  BASE_URL: string = environment.BASE_URL;
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
      .get(`${this.BASE_URL}/api/user`, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(error => Observable.throw(error.json().message));
  }

  getThisUser(user) {
    return this.http
      .post(`${this.BASE_URL}/api/user/session`, user, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(error => Observable.throw(error.json().message));
  }

  isLoggedIn() {
    return this.http
      .get(`${this.BASE_URL}/api/user/session`, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(error => Observable.throw(error.json().message));
  }

  signup(user) {
    return this.http
      .post(`${this.BASE_URL}/api/user/signup`, user, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(error => Observable.throw(error.json().message));
  }

  login(user) {
    return this.http
      .post(`${this.BASE_URL}/api/user/login`, user, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(error => Observable.throw(error.json().message));
  }

  update(user) {
    return this.http
      .put(`${this.BASE_URL}/api/user/update/${user._id}`, user, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(error => Observable.throw(error.json().message));
  }

  erase(user) {
    return this.http
      .delete(`${this.BASE_URL}/api/user`, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(error => Observable.throw(error.json().message));
  }

  logout() {
    return this.http
      .get(`${this.BASE_URL}/api/user/logout`, this.options)
      .map(res => res.json())
      .map(() => this.handleUser())
      .catch(error => Observable.throw(error.json().message));
  }
}