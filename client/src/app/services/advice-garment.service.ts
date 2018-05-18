import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class AdviceGarmentService {

  advicegarment: any;
  BASE_URL: string = 'http://localhost:3000';
  options: any = { withCredentials: true };
  constructor(private http: Http) {}

  handleAdviceGarment(advicegarment?: object) {
    this.advicegarment = advicegarment;
    return this.advicegarment;
  }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/advicesgarment`, this.options)
      .map((res) => res.json())
      .map(user => this.handleAdviceGarment(user))
      .catch(error => Observable.throw(error.json().message));
  }

  get(advicegarment) {
    return this.http.get(`${this.BASE_URL}/api/advicesgarment/${advicegarment.id}`, this.options)
      .map((res) => res.json())
      .map(user => this.handleAdviceGarment(user))
      .catch(error => Observable.throw(error.json().message));
  }

  edit(advicegarment) {
    return this.http.put(`${this.BASE_URL}/api/advicesgarment/${advicegarment._id}`, advicegarment, this.options)
      .map((res) => res.json())
      .map(user => this.handleAdviceGarment(user))
      .catch(error => Observable.throw(error.json().message));
  }

  remove(advicegarment) {
    return this.http.delete(`${this.BASE_URL}/api/advicesgarment/${advicegarment._id}`, this.options)
      .map((res) => res.json())
      .map(user => this.handleAdviceGarment(user))
      .catch(error => Observable.throw(error.json().message));
  }

  newAdviceGarment(advicegarment) {
    return this.http.post(`${this.BASE_URL}/api/advicesgarment`, advicegarment, this.options)
      .map((res) => res.json())
      .map(user => this.handleAdviceGarment(user))
      .catch(error => Observable.throw(error.json().message));
  }

}
