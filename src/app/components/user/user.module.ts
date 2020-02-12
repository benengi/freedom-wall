import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GoogleSigninDirective } from './google-signin.directive';


@NgModule({
  declarations: [ProfilePageComponent, LoginPageComponent, GoogleSigninDirective],
  exports: [GoogleSigninDirective],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    GoogleSigninDirective
  ]
})
export class UserModule { }
