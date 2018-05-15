import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClothesService } from '../../services/clothes.service';

@Component({
  selector: 'app-garment-single',
  templateUrl: './garment-single.component.html',
  styleUrls: ['./garment-single.component.scss']
})
export class GarmentSingleComponent implements OnInit {

  garment: any;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private clothesService: ClothesService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.clothesService.get(params)
      .subscribe( garment => this.garment = garment );
    })
  }

  deleteGarment() {
    console.log("DELETED GARMENT");
    this.clothesService.remove(this.garment._id).subscribe(() => {
      this.router.navigate(["/"]);
    });
  }

}
