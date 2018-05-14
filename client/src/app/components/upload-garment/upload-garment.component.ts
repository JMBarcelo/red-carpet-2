import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../../services/user-session.service';
import { Router } from '@angular/router';
import { ClothesService } from '../../services/clothes.service';

@Component({
  selector: 'app-upload-garment',
  templateUrl: './upload-garment.component.html',
  styleUrls: ['./upload-garment.component.scss']
})
export class UploadGarmentComponent implements OnInit {

  garmentInfo = {
    _user: this.userSessionService.user,
    size: '',
    brand: '',
    kind: '',
  }

  constructor(public userSessionService: UserSessionService, public clothesService: ClothesService ,public router: Router) {
    
  }

  ngOnInit() {
    
  }

  newGarment() {
    this.clothesService.newGarment(this.garmentInfo)
      .subscribe(() => this.router.navigate(["/"]));
  }

}
