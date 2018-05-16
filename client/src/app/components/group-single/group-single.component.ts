import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupsService } from '../../services/groups.service';

@Component({
  selector: 'app-group-single',
  templateUrl: './group-single.component.html',
  styleUrls: ['./group-single.component.scss']
})
export class GroupSingleComponent implements OnInit {

  group: any;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private groupsService: GroupsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.groupsService.get(params)
      .subscribe( group => this.group = group );
    })
  }

  deleteFavslist() {
    console.log("DELETED FAVSLIST");
    this.groupsService.remove(this.group._id).subscribe(() => {
      this.router.navigate(["/"]);
    });
  }

}
