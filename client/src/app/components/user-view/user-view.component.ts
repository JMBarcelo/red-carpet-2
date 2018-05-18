import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../../services/user-session.service';
import { Router } from '@angular/router';
import { ClothesService } from '../../services/clothes.service';
import { GroupsService } from '../../services/groups.service';
import { FavslistsService } from '../../services/favslists.service';
import { MeetingsService } from '../../services/meetings.service';
import { AdviceGroupService } from '../../services/advice-group.service';
import { AdviceGarmentService } from '../../services/advice-garment.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  
  user: any;
  clothes: any;
  groups: any;
  favslists: any;
  meetings: any;
  advicegroups:any;
  advicegarments: any;

  constructor(
    public userSessionService: UserSessionService,
    public clothesService: ClothesService,
    public router: Router,
    public groupsService: GroupsService,
    public favsListsService: FavslistsService,
    public meetingsService: MeetingsService,
    public adviceGroupService: AdviceGroupService,
    public adviceGarmentService: AdviceGarmentService
  ) {}

  ngOnInit() {
    this.userSessionService.isLoggedIn().subscribe( u => {
      this.user = u
      this.clothesService.getList().subscribe(list => this.clothes = list)
      this.groupsService.getList().subscribe(list => this.groups = list)
      this.favsListsService.getList().subscribe(list => this.favslists = list)
      this.meetingsService.getList().subscribe(list => this.meetings = list)
      this.adviceGroupService.getList().subscribe(list => this.advicegroups = list)      
      this.adviceGarmentService.getList().subscribe(list => this.advicegarments = list)      
    });
  }

  logout() {
    this.userSessionService.logout()
    .subscribe(() => this.router.navigate(['/']));
  }

  accept(groupID, receiverID, advicegroup) {
    this.groupsService.userGroup(groupID, receiverID)
    .subscribe()
    this.adviceGroupService.remove(advicegroup)
      .subscribe(() => this.router.navigate(['/home']));
  }

  decline(advicegroup) {
    this.adviceGroupService.remove(advicegroup)
      .subscribe(() => this.router.navigate(['/home']));
  }

  acceptBorrow(garmentID, receiverID, advicegarments, daysbefore, daysafter, datemeeting) {
    this.clothesService.userGarment(garmentID, receiverID, daysbefore, daysafter, datemeeting)
    .subscribe()
    this.adviceGarmentService.remove(advicegarments)
      .subscribe(() => this.router.navigate(['/home']));
  }

  declineBorrow(advicegarments) {
    this.adviceGarmentService.remove(advicegarments)
      .subscribe(() => this.router.navigate(['/home']));
  }

}
