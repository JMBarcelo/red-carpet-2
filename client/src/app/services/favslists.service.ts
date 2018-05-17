import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FavslistsService {

  favslist: any;
  BASE_URL: string = 'http://localhost:3000';
  options: any = { withCredentials: true };
  constructor(private http: Http) {}

  handleFavslist(favslist?: object) {
    this.favslist = favslist;
    return this.favslist;
  }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/favslists`, this.options)
      .map((res) => res.json())
      .map(user => this.handleFavslist(user))
      .catch(error => Observable.throw(error.json().message));
  }

  getGarment(favslist) {
    return this.http.get(`${this.BASE_URL}/api/favslists/garment/${favslist._id}`, this.options)
      .map((res) => res.json())
      .map(user => this.handleFavslist(user))
      .catch(error => Observable.throw(error.json().message));
  }

  get(favslist) {
    return this.http.get(`${this.BASE_URL}/api/favslists/${favslist.id}`, this.options)
      .map((res) => res.json())
      .map(user => this.handleFavslist(user))
      .catch(error => Observable.throw(error.json().message));
  }

  edit(favslist) {
    return this.http.put(`${this.BASE_URL}/api/favslists/${favslist._id}`, favslist, this.options)
      .map((res) => res.json())
      .map(user => this.handleFavslist(user))
      .catch(error => Observable.throw(error.json().message));
  }

  remove(favslist) {
    return this.http.delete(`${this.BASE_URL}/api/favslists/${favslist._id}`, this.options)
      .map((res) => res.json())
      .map(user => this.handleFavslist(user))
      .catch(error => Observable.throw(error.json().message));
  }

  newFavslist(favslist) {
    return this.http.post(`${this.BASE_URL}/api/favslists`, favslist, this.options)
      .map((res) => res.json())
      .map(user => this.handleFavslist(user))
      .catch(error => Observable.throw(error.json().message));
  }

  garmentFavslist(favslistID, garmentID) {
    return this.http.put(`${this.BASE_URL}/api/favslists/tofavslist/${favslistID}`, {garment: garmentID}, this.options)
      .map((res) => res.json())
      .map(user => this.handleFavslist(user))
      .catch(error => Observable.throw(error.json().message));
  }

  outFavslist(favslistID, garmentID) {
    return this.http.put(`${this.BASE_URL}/api/favslists/outfavslist/${favslistID}`, {garment: garmentID}, this.options)
      .map((res) => res.json())
      .map(user => this.handleFavslist(user))
      .catch(error => Observable.throw(error.json().message));
  }

}
