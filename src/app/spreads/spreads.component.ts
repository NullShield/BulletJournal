import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spreads',
  templateUrl: './spreads.component.html',
  styleUrls: ['./spreads.component.scss']
})
export class SpreadsComponent implements OnInit {

  array = [ 'Wish List', 'Books To Read', 'Shopping List', 'Weather', 'Quote Pages', 'Places To Visit', 'Packing List'];

  constructor() { }

  ngOnInit() {
  }

}
