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

export const routes: Routes = [
   { path: '', component: UserViewComponent},
   { path: 'user', component: UserViewComponent},
   { path: 'signup', component: SignUpComponent},
   { path: 'login', component: LogInComponent},
   { path: 'edituser', component: UserUpdateComponent},
   { path: 'addgarment', component: GarmentUploadComponent},
   { path: 'garment/:id', component: GarmentSingleComponent},
   { path: 'editgarment/:id', component: GarmentEditComponent},
   { path: 'addfavslist', component: FavslistAddComponent},
   { path: 'favslist/:id', component: FavslistSingleComponent},
   { path: 'editfavslist/:id', component: FavslistEditComponent},     
   //{ path: 'group', component: },
   //{ path: 'event', component: },
   //{ path: 'favlist', component: },
   { path: '**', redirectTo: ''}
];
