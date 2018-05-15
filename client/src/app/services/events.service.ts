import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EventsService {

  BASE_URL: string = 'http://localhost:3000';
  options: any = { withCredentials: true };
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.BASE_URL}/api/clothes`, this.options)
      .map((res) => res.json());
  }

  get(event) {
    return this.http.get(`${this.BASE_URL}/api/clothes/${event.id}`, this.options)
      .map((res) => res.json());
  }

  edit(event) {
    return this.http.put(`${this.BASE_URL}/api/clothes/${event.id}`, event, this.options)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/api/clothes/${id}`, this.options)
      .map((res) => res.json());
  }

  newEvent(event) {
    return this.http.post(`${this.BASE_URL}/api/clothes`, event, this.options)
      .map((res) => res.json());
  }

}
