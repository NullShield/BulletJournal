import { AppRoutingModule } from './../app-routing.module';
import { HomeComponent } from './../home/home.component';
import { ContactComponent } from './../contact/contact.component';
import { AboutComponent } from './../about/about.component';
import { NavComponent } from './../nav/nav.component';
import { LoginComponent } from './../login/login.component';
import { RegisterComponent } from './../register/register.component';
import { MainBulletJournalComponent } from './main-bullet-journal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    MainBulletJournalComponent,
    RegisterComponent,
    LoginComponent,
    NavComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainBulletJournalComponent]
})
export class MainBulletJournalModule { }
