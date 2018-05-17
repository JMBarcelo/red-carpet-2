import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../../services/user-session.service';
import { ClothesService } from '../../services/clothes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FavslistsService } from '../../services/favslists.service';

@Component({
  selector: 'app-garment-favslist',
  templateUrl: './garment-favslist.component.html',
  styleUrls: ['./garment-favslist.component.scss']
})
export class GarmentFavslistComponent implements OnInit {

  user: any;
  garment: any;
  favslists: any; 
  params: any;

  constructor(
    public userSessionService: UserSessionService,
    public clothesService: ClothesService,
    public router: Router,
    public favslistsService: FavslistsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(rP => this.params = rP.id)
    this.userSessionService.isLoggedIn().subscribe( u => {
      this.user = u
      this.favslistsService.getList().subscribe(list => this.favslists = list)
    });

  }

  garmentFavslist(favslistID) {
    this.favslistsService.garmentFavslist(favslistID, this.params)
      .subscribe(() => this.router.navigate(['/']));
  }

}
