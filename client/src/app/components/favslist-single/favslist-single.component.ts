import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavslistsService } from '../../services/favslists.service';

@Component({
  selector: 'app-favslist-single',
  templateUrl: './favslist-single.component.html',
  styleUrls: ['./favslist-single.component.scss']
})
export class FavslistSingleComponent implements OnInit {

  favslist: any;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private favslistsService: FavslistsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.favslistsService.get(params)
      .subscribe( favslist => this.favslist = favslist );
    })
  }

  deleteFavslist() {
    console.log("DELETED FAVSLIST");
    this.favslistsService.remove(this.favslist._id).subscribe(() => {
      this.router.navigate(["/"]);
    });
  }

}
