import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GroupsService {

  BASE_URL: string = 'http://localhost:3000';
  options: any = { withCredentials: true };
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.BASE_URL}/api/clothes`, this.options)
      .map((res) => res.json());
  }

  get(groups) {
    return this.http.get(`${this.BASE_URL}/api/clothes/${groups.id}`, this.options)
      .map((res) => res.json());
  }

  edit(groups) {
    return this.http.put(`${this.BASE_URL}/api/clothes/${groups.id}`, groups, this.options)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/api/clothes/${id}`, this.options)
      .map((res) => res.json());
  }

  newGroups(groups) {
    return this.http.post(`${this.BASE_URL}/api/clothes`, groups, this.options)
      .map((res) => res.json());
  }

}
