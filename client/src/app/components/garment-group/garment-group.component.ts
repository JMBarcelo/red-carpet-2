import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../../services/user-session.service';
import { ClothesService } from '../../services/clothes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupsService } from '../../services/groups.service';

@Component({
  selector: 'app-garment-group',
  templateUrl: './garment-group.component.html',
  styleUrls: ['./garment-group.component.scss']
})
export class GarmentGroupComponent implements OnInit {

  user: any;
  garment: any;
  groups: any; 
  params: any;

  constructor(
    public userSessionService: UserSessionService,
    public clothesService: ClothesService,
    public router: Router,
    public groupsService: GroupsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(rP => this.params = rP.id)
    this.userSessionService.isLoggedIn().subscribe( u => {
      this.user = u
      this.groupsService.getList().subscribe(list => this.groups = list)
    });

  }

  garmentGroup(groupID) {
    this.groupsService.garmentGroup(groupID, this.params)
      .subscribe(() => this.router.navigate(['/']));
  }

}
