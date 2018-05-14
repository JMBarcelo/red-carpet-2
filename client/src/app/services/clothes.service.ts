import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ClothesService {

  BASE_URL: string = 'http://localhost:3000';
  options: any = { withCredentials: true };
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.BASE_URL}/clothes`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/clothes/${id}`)
      .map((res) => res.json());
  }

  edit(garment) {
    return this.http.put(`${this.BASE_URL}/clothes/${garment.id}`, garment)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/clothes/${id}`)
      .map((res) => res.json());
  }

  newGarment(garment) {
    return this.http.post(`${this.BASE_URL}/api/garment`, garment, this.options)
      .map((res) => res.json());
  }

}
