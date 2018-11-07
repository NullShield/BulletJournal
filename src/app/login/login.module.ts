import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    LoginComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    LoginModalComponent,
    NgbModal
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
