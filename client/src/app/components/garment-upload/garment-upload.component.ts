import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../../services/user-session.service';
import { Router } from '@angular/router';
import { ClothesService } from '../../services/clothes.service';

@Component({
  selector: 'app-garment-upload',
  templateUrl: './garment-upload.component.html',
  styleUrls: ['./garment-upload.component.scss']
})
export class GarmentUploadComponent implements OnInit {

  garmentInfo = {
    _user: this.userSessionService.user,
    size: '',
    brand: '',
    kind: '',
    description: ''
  }

  constructor(
    public userSessionService: UserSessionService,
    public clothesService: ClothesService,
    public router: Router
  ) {
    
  }

  ngOnInit() {
    
  }

  newGarment() {
    this.clothesService.newGarment(this.garmentInfo)
      .subscribe(() => this.router.navigate(["/"]));
  }

}
