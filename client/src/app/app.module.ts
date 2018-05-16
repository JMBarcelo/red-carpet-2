import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routing';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { GarmentUploadComponent } from './components/garment-upload/garment-upload.component';
import { GarmentSingleComponent } from './components/garment-single/garment-single.component';
import { GarmentEditComponent } from './components/garment-edit/garment-edit.component';

import { UserSessionService } from './services/user-session.service';
import { ClothesService } from './services/clothes.service';

import { FavslistsService } from './services/favslists.service';
import { GroupsService } from './services/groups.service';
import { NotificationsService } from './services/notifications.service';
import { FavslistAddComponent } from './components/favslist-add/favslist-add.component';
import { FavslistSingleComponent } from './components/favslist-single/favslist-single.component';
import { FavslistEditComponent } from './components/favslist-edit/favslist-edit.component';
import { GroupCreateComponent } from './components/group-create/group-create.component';
import { GroupSingleComponent } from './components/group-single/group-single.component';
import { GroupEditComponent } from './components/group-edit/group-edit.component';
import { MeetingAddComponent } from './components/meeting-add/meeting-add.component';
import { MeetingEditComponent } from './components/meeting-edit/meeting-edit.component';
import { MeetingSingleComponent } from './components/meeting-single/meeting-single.component';
import { MeetingsService } from './services/meetings.service';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    UserViewComponent,
    UserUpdateComponent,
    GarmentUploadComponent,
    GarmentSingleComponent,
    GarmentEditComponent,
    FavslistAddComponent,
    FavslistSingleComponent,
    FavslistEditComponent,
    GroupCreateComponent,
    GroupSingleComponent,
    GroupEditComponent,
    MeetingAddComponent,
    MeetingEditComponent,
    MeetingSingleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    UserSessionService,
    ClothesService,
    MeetingsService,
    FavslistsService,
    GroupsService,
    NotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
