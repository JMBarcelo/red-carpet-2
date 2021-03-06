import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment }  from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GroupsService {

  group: any;
  BASE_URL: string = environment.BASE_URL;
  options: any = { withCredentials: true };
  constructor(private http: Http) {}

  handleGroup(group?: object) {
    this.group = group;
    return this.group;
  }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/groups`, this.options)
      .map((res) => res.json())
      .map(user => this.handleGroup(user))
      .catch(error => Observable.throw(error.json().message));
  }

  getGarment(group) {
    return this.http.get(`${this.BASE_URL}/api/groups/garment/${group.id}`, this.options)
      .map((res) => res.json())
      .map(user => this.handleGroup(user))
      .catch(error => Observable.throw(error.json().message));
  }

  getUserList() {
    return this.http.get(`${this.BASE_URL}/api/groups`, this.options)
      .map((res) => res.json())
      .map(user => this.handleGroup(user))
      .catch(error => Observable.throw(error.json().message));
  }

  get(group) {
    return this.http.get(`${this.BASE_URL}/api/groups/${group.id}`, this.options)
      .map((res) => res.json())
      .map(user => this.handleGroup(user))
      .catch(error => Observable.throw(error.json().message));
  }

  edit(group) {
    return this.http.put(`${this.BASE_URL}/api/groups/${group._id}`, group, this.options)
      .map((res) => res.json())
      .map(user => this.handleGroup(user))
      .catch(error => Observable.throw(error.json().message));
  }

  remove(group) {
    return this.http.delete(`${this.BASE_URL}/api/groups/${group._id}`, this.options)
      .map((res) => res.json())
      .map(user => this.handleGroup(user))
      .catch(error => Observable.throw(error.json().message));
  }

  newGroup(group) {
    return this.http.post(`${this.BASE_URL}/api/groups`, group, this.options)
      .map((res) => res.json())
      .map(user => this.handleGroup(user))
      .catch(error => Observable.throw(error.json().message));
  }

  garmentGroup(groupID, garmentID) {
    return this.http.put(`${this.BASE_URL}/api/groups/togroup/${groupID}`, {garment: garmentID}, this.options)
      .map((res) => res.json())
      .map(user => this.handleGroup(user))
      .catch(error => Observable.throw(error.json().message));
  }

  userGroup(groupID, userID) {
    return this.http.put(`${this.BASE_URL}/api/groups/usergroup/${groupID}`, {user: userID}, this.options)
      .map((res) => res.json())
      .map(user => this.handleGroup(user))
      .catch(error => Observable.throw(error.json().message));
  }

  leaveGroup(groupID, userID) {
    return this.http.put(`${this.BASE_URL}/api/groups/leavegroup/${groupID}`, {user: userID}, this.options)
      .map((res) => res.json())
      .map(user => this.handleGroup(user))
      .catch(error => Observable.throw(error.json().message));
  }

}
