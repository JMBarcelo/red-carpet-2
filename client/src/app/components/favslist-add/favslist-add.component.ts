import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../../services/user-session.service';
import { FavslistsService } from '../../services/favslists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favslist-add',
  templateUrl: './favslist-add.component.html',
  styleUrls: ['./favslist-add.component.scss']
})
export class FavslistAddComponent implements OnInit {

  favslistInfo = {
    _user: this.userSessionService.user,
    title: '',
    color: '',
  }

  constructor(
    public userSessionService: UserSessionService,
    public favslistsService: FavslistsService,
    public router: Router
  ) {
    
  }

  ngOnInit() {
    
  }

  newFavslist() {
    this.favslistsService.newFavslist(this.favslistInfo)
      .subscribe(() => this.router.navigate(["/"]));
  }

}
