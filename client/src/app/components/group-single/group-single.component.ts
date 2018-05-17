import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupsService } from '../../services/groups.service';
import { ClothesService } from '../../services/clothes.service';
import { FavslistsService } from '../../services/favslists.service';

@Component({
  selector: 'app-group-single',
  templateUrl: './group-single.component.html',
  styleUrls: ['./group-single.component.scss']
})
export class GroupSingleComponent implements OnInit {

  group: any;
  clothes: any;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private groupsService: GroupsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.groupsService.getGarment(params)
      .subscribe( group => {
        this.group = group;
        this.clothes = this.group.clothes
      });
    })
  }
}
