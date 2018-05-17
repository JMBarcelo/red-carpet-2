import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class AdviceGroupService {

  advicegroup: any;
  BASE_URL: string = 'http://localhost:3000';
  options: any = { withCredentials: true };
  constructor(private http: Http) {}

  handleAdviceGroup(advicegroup?: object) {
    this.advicegroup = advicegroup;
    return this.advicegroup;
  }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/advicesgroup`, this.options)
      .map((res) => res.json())
      .map(user => this.handleAdviceGroup(user))
      .catch(error => Observable.throw(error.json().message));
  }

  get(advicegroup) {
    return this.http.get(`${this.BASE_URL}/api/advicesgroup/${advicegroup.id}`, this.options)
      .map((res) => res.json())
      .map(user => this.handleAdviceGroup(user))
      .catch(error => Observable.throw(error.json().message));
  }

  edit(advicegroup) {
    return this.http.put(`${this.BASE_URL}/api/advicesgroup/${advicegroup._id}`, advicegroup, this.options)
      .map((res) => res.json())
      .map(user => this.handleAdviceGroup(user))
      .catch(error => Observable.throw(error.json().message));
  }

  remove(advicegroup) {
    return this.http.delete(`${this.BASE_URL}/api/advicesgroup/${advicegroup._id}`, this.options)
      .map((res) => res.json())
      .map(user => this.handleAdviceGroup(user))
      .catch(error => Observable.throw(error.json().message));
  }

  newAdviceGroup(advicegroup) {
    return this.http.post(`${this.BASE_URL}/api/advicesgroup`, advicegroup, this.options)
      .map((res) => res.json())
      .map(user => this.handleAdviceGroup(user))
      .catch(error => Observable.throw(error.json().message));
  }

}
