import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journaling',
  templateUrl: './journaling.component.html',
  styleUrls: ['./journaling.component.scss']
})
export class JournalingComponent implements OnInit {

  array = [ 'Key', 'Future Log', 'Monthly Cover Page', 'Monthly log', 'Weekly log', 'Daily log', 'Memories'];

  constructor() { }

  ngOnInit() {
  }

}
