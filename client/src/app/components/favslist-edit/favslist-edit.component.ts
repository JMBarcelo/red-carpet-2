import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSessionService } from '../../services/user-session.service';
import { FavslistsService } from '../../services/favslists.service';

@Component({
  selector: 'app-favslist-edit',
  templateUrl: './favslist-edit.component.html',
  styleUrls: ['./favslist-edit.component.scss']
})
export class FavslistEditComponent implements OnInit {

  favslist: any;

  constructor(
    public route: ActivatedRoute,
    public userSessionService: UserSessionService,
    public favslistsService: FavslistsService,
    public router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.favslistsService.get(params)
      .subscribe( favslist => this.favslist = favslist );
    })
  }

  edit() {
    this.favslistsService.edit(this.favslistsService.favslist)
    .subscribe(() => this.router.navigate(['/']));
  }

  delete() {
    this.favslistsService.remove(this.favslistsService.favslist)
    .subscribe(() => this.router.navigate(['/']));
  }

}
