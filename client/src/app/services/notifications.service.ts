import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NotificationsService {

  BASE_URL: string = 'http://localhost:3000';
  options: any = { withCredentials: true };
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.BASE_URL}/api/clothes`, this.options)
      .map((res) => res.json());
  }

  get(notification) {
    return this.http.get(`${this.BASE_URL}/api/clothes/${notification.id}`, this.options)
      .map((res) => res.json());
  }

  edit(notification) {
    return this.http.put(`${this.BASE_URL}/api/clothes/${notification.id}`, notification, this.options)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/api/clothes/${id}`, this.options)
      .map((res) => res.json());
  }

  newNotification(notification) {
    return this.http.post(`${this.BASE_URL}/api/clothes`, notification, this.options)
      .map((res) => res.json());
  }

}
