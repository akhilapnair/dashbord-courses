import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  isLinear = false;
  course: any = [
    {value: '1', viewValue: 'Cloud'},
    {value: '2', viewValue: 'AI'},
    {value: '3', viewValue: 'Computing'},
  ];
  constructor() {

   }

  ngOnInit() {

  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

}
