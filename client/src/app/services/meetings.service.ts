import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MeetingsService {

  meeting: any;
  BASE_URL: string = 'http://localhost:3000';
  options: any = { withCredentials: true };
  constructor(private http: Http) {}

  handleMeeting(meeting?: object) {
    this.meeting = meeting;
    return this.meeting;
  }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/meetings`, this.options)
      .map((res) => res.json())
      .map(user => this.handleMeeting(user))
      .catch(error => Observable.throw(error.json().message));
  }

  get(meeting) {
    return this.http.get(`${this.BASE_URL}/api/meetings/${meeting.id}`, this.options)
      .map((res) => res.json())
      .map(user => this.handleMeeting(user))
      .catch(error => Observable.throw(error.json().message));
  }

  edit(meeting) {
    return this.http.put(`${this.BASE_URL}/api/meetings/${meeting._id}`, meeting, this.options)
      .map((res) => res.json())
      .map(user => this.handleMeeting(user))
      .catch(error => Observable.throw(error.json().message));
  }

  remove(meeting) {
    return this.http.delete(`${this.BASE_URL}/api/meetings/${meeting._id}`, this.options)
      .map((res) => res.json())
      .map(user => this.handleMeeting(user))
      .catch(error => Observable.throw(error.json().message));
  }

  newMeeting(meeting) {
    return this.http.post(`${this.BASE_URL}/api/meetings`, meeting, this.options)
      .map((res) => res.json())
      .map(user => this.handleMeeting(user))
      .catch(error => Observable.throw(error.json().message));
  }

}
