import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClothesService {

  garment: any;
  BASE_URL: string = 'http://localhost:3000';
  options: any = { withCredentials: true };
  constructor(private http: Http) {}

  handleGarment(garment?: object) {
    this.garment = garment;
    return this.garment;
  }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/clothes`, this.options)
      .map((res) => res.json())
      .map(user => this.handleGarment(user))
      .catch(error => Observable.throw(error.json().message));
  }

  get(garment) {
    return this.http.get(`${this.BASE_URL}/api/clothes/${garment.id}`, this.options)
      .map((res) => res.json())
      .map(user => this.handleGarment(user))
      .catch(error => Observable.throw(error.json().message));
  }

  getID(garment) {
    return this.http.get(`${this.BASE_URL}/api/clothes/${garment}`, this.options)
      .map((res) => res.json())
      .map(user => this.handleGarment(user))
      .catch(error => Observable.throw(error.json().message));
  }

  edit(garment) {
    return this.http.put(`${this.BASE_URL}/api/clothes/${garment._id}`, garment, this.options)
      .map((res) => res.json())
      .map(user => this.handleGarment(user))
      .catch(error => Observable.throw(error.json().message));
  }

  remove(garment) {
    return this.http.delete(`${this.BASE_URL}/api/clothes/${garment._id}`, this.options)
      .map((res) => res.json())
      .map(user => this.handleGarment(user))
      .catch(error => Observable.throw(error.json().message));
  }

  newGarment(garment) {
    return this.http.post(`${this.BASE_URL}/api/clothes`, garment, this.options)
      .map((res) => res.json())
      .map(user => this.handleGarment(user))
      .catch(error => Observable.throw(error.json().message));
  }

  userGarment(garmentID, userID, daysbefore, daysafter, datemeeting) {
    return this.http.put(`${this.BASE_URL}/api/clothes/usergarment/${garmentID}`, {user: userID, db: daysbefore, da: daysafter, dm: datemeeting}, this.options)
      .map((res) => res.json())
      .map(user => this.handleGarment(user))
      .catch(error => Observable.throw(error.json().message));
  }

}
