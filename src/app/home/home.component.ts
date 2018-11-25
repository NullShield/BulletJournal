import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  array = ['Trackers', 'Spreads/Collections', 'Journaling'];
  btnSpread = false;
  btnTracks = false;
  btnJourn = false;

  constructor() { }

  ngOnInit() {
    console.log(this.array);
  }

  onSpread() {
    this.btnSpread = true;
    this.btnTracks = false;
    this.btnJourn = false;
  }
  onTracks() {
    this.btnSpread = false;
    this.btnJourn = false;
    this.btnTracks = true;
  }
  onJourn() {
    this.btnSpread = false;
    this.btnJourn = true;
    this.btnTracks = false;
  }
}
