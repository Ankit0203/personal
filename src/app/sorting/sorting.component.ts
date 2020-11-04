import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  list = [
    {
      measure: 'length',
      display: 'Length'
    },
    {
      measure: 'area',
      display: 'Area'
    },
    {
      measure: 'volume',
      display: 'volume'
    },
    {
      measure: 'time',
      display: 'Time'
    },
    {
      measure: 'current',
      display: 'Current'
    },
    {
      measure: 'energy',
      display: 'Energy'
    },

];


}
