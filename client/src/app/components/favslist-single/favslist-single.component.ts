import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavslistsService } from '../../services/favslists.service';
import { ClothesService } from '../../services/clothes.service';

@Component({
  selector: 'app-favslist-single',
  templateUrl: './favslist-single.component.html',
  styleUrls: ['./favslist-single.component.scss']
})
export class FavslistSingleComponent implements OnInit {

  favslist: any;
  clothes: any;
  params: any;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private favslistsService: FavslistsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.favslistsService.getGarment(params)
      .subscribe( favslist => {
        this.favslist = favslist;
        this.clothes = favslist.clothes;
      });
    })
  }

  deleteFavslist() {
    this.favslistsService.remove(this.favslist._id).subscribe(() => {
      this.router.navigate(["/"]);
    });
  }

  outFavslist(garmentID) {
    this.favslistsService.outFavslist(this.favslist._id, garmentID)
      .subscribe(() => this.router.navigate(['/']));
  }

}
