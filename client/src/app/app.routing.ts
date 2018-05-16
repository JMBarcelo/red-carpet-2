import { Routes } from '@angular/router';
import { UserViewComponent } from './components/user-view/user-view.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { GarmentUploadComponent } from './components/garment-upload/garment-upload.component';
import { GarmentSingleComponent } from './components/garment-single/garment-single.component';
import { GarmentEditComponent } from './components/garment-edit/garment-edit.component';
import { FavslistAddComponent } from './components/favslist-add/favslist-add.component';
import { FavslistSingleComponent } from './components/favslist-single/favslist-single.component';
import { FavslistEditComponent } from './components/favslist-edit/favslist-edit.component';
import { GroupCreateComponent } from './components/group-create/group-create.component';
import { GroupEditComponent } from './components/group-edit/group-edit.component';
import { GroupSingleComponent } from './components/group-single/group-single.component';
import { MeetingAddComponent } from './components/meeting-add/meeting-add.component';
import { MeetingSingleComponent } from './components/meeting-single/meeting-single.component';
import { MeetingEditComponent } from './components/meeting-edit/meeting-edit.component';
import { GarmentGroupComponent } from './components/garment-group/garment-group.component';
import { UserInviteComponent } from './components/user-invite/user-invite.component';

export const routes: Routes = [
   { path: '', component: UserViewComponent},
   { path: 'user', component: UserViewComponent},
   { path: 'signup', component: SignUpComponent},
   { path: 'login', component: LogInComponent},
   { path: 'edituser', component: UserUpdateComponent},
   { path: 'addgarment', component: GarmentUploadComponent},
   { path: 'garment/:id', component: GarmentSingleComponent},
   { path: 'editgarment/:id', component: GarmentEditComponent},
   { path: 'garmentgroup/:id', component: GarmentGroupComponent},
   { path: 'addfavslist', component: FavslistAddComponent},
   { path: 'favslist/:id', component: FavslistSingleComponent},
   { path: 'editfavslist/:id', component: FavslistEditComponent},     
   { path: 'addgroup', component: GroupCreateComponent},
   { path: 'group/:id', component: GroupSingleComponent},
   { path: 'editgroup/:id', component: GroupEditComponent}, 
   { path: 'addmeeting', component: MeetingAddComponent},
   { path: 'meeting/:id', component: MeetingSingleComponent},
   { path: 'editmeeting/:id', component: MeetingEditComponent}, 
   { path: 'inviteusers/:id', component: UserInviteComponent}, 
   { path: '**', redirectTo: ''}
];
