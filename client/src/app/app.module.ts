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
import { UploadGarmentComponent } from './components/upload-garment/upload-garment.component';
import { SingleGarmentComponent } from './components/single-garment/single-garment.component';

import { UserSessionService } from './services/user-session.service';
import { ClothesService } from './services/clothes.service';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    UserViewComponent,
    UserUpdateComponent,
    UploadGarmentComponent,
    SingleGarmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [UserSessionService, ClothesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
