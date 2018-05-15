import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSessionService } from '../../services/user-session.service';
import { ClothesService } from '../../services/clothes.service';

@Component({
  selector: 'app-garment-edit',
  templateUrl: './garment-edit.component.html',
  styleUrls: ['./garment-edit.component.scss']
})
export class GarmentEditComponent implements OnInit {

  garment: any;

  constructor(
    public route: ActivatedRoute,
    public userSessionService: UserSessionService,
    public clothesService: ClothesService,
    public router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.clothesService.get(params)
      .subscribe( garment => this.garment = garment );
    })
  }

  edit() {
    this.clothesService.edit(this.clothesService.garment)
    .subscribe(() => this.router.navigate(['/']));
  }

  delete() {
    this.clothesService.remove(this.clothesService.garment)
    .subscribe(() => this.router.navigate(['/']));
  }

}
