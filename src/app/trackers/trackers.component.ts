import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackers',
  templateUrl: './trackers.component.html',
  styleUrls: ['./trackers.component.scss']
})
export class TrackersComponent implements OnInit {

  array = ['Expense Tracker', 'Sleep Tracker', 'Mood Tracker', 'Mood Mandala',
            'Habit Tracker', 'Period Tracker', 'Tv Shows Tracker', 'Movies Tracker',
            'Car + Gas Tracker', 'Finances Tracker', 'Online Shopping Tracker'];

  constructor() { }

  ngOnInit() {
  }

}
