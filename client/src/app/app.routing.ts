import { Routes } from '@angular/router';
import { UserViewComponent } from './components/user-view/user-view.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UploadGarmentComponent } from './components/upload-garment/upload-garment.component';
import { SingleGarmentComponent } from './components/single-garment/single-garment.component';

export const routes: Routes = [
   { path: '', component: UserViewComponent},
   { path: 'user', component: UserViewComponent},
   { path: 'signup', component: SignUpComponent},
   { path: 'login', component: LogInComponent},
   { path: 'edit', component: UserUpdateComponent},
   { path: 'addGarment', component: UploadGarmentComponent},
   { path: 'garment/:id', component: SingleGarmentComponent},   
   //{ path: 'group', component: },
   //{ path: 'event', component: },
   //{ path: 'favlist', component: },
   { path: '**', redirectTo: ''}
];
