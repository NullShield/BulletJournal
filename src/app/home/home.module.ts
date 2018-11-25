import { HomeComponent } from './home.component';
import { TrackersComponent } from './../trackers/trackers.component';
import { SpreadsComponent } from './../spreads/spreads.component';
import { JournalingComponent } from './../journaling/journaling.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    JournalingComponent,
    SpreadsComponent,
    TrackersComponent
  ],
  imports: [
    BrowserModule,
    NgbModal,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
