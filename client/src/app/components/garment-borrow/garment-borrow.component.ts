import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../../services/user-session.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClothesService } from '../../services/clothes.service';
import { AdviceGarmentService } from '../../services/advice-garment.service';
import { MeetingsService } from '../../services/meetings.service';

@Component({
  selector: 'app-garment-borrow',
  templateUrl: './garment-borrow.component.html',
  styleUrls: ['./garment-borrow.component.scss']
})
export class GarmentBorrowComponent implements OnInit {

  user: any;
  owner: any;
  garment: any;
  datemeeting: any;
  meeting: any;

  adviceGarmentInfo = {
    _sender: '',
    _receiver: '',
    _garment: '',
    _meeting: '',
    datemeeting: '',
    daysbefore: 0,
    daysafter: 0,
    message: ''
  };

  constructor(
    public userSessionService: UserSessionService,
    public clothesService: ClothesService,
    public router: Router,
    public adviceGarmentService: AdviceGarmentService,
    private route: ActivatedRoute,
    public meetingsService: MeetingsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.meetingsService.getID(params.id2)
      .subscribe( meeting => {
        this.meeting = meeting;
        this.datemeeting = this.meeting.date
      });
      this.clothesService.getID(params.id)
      .subscribe( garment => {
        this.garment = garment;
        this.owner = garment._user
      });
    })
    this.userSessionService.isLoggedIn().subscribe( u => {
      this.user = u
    });
  }

  sendBorrow() {
    this.adviceGarmentInfo._sender = this.userSessionService.user._id
    this.adviceGarmentInfo._receiver = this.garment._user;
    this.adviceGarmentInfo._garment = this.garment._id;
    this.adviceGarmentInfo._meeting = this.meeting._id;
    this.adviceGarmentInfo.datemeeting = this.datemeeting;
    this.adviceGarmentService.newAdviceGarment(this.adviceGarmentInfo)
    .subscribe(() => {
      this.router.navigate(["/"]);
    });
  }

}
