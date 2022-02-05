import { Component, OnInit } from '@angular/core';
import { courses } from '../courses';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  CourseList: courses[] = [];
  constructor(private commonService: DashboardServiceService) {}
  ngOnInit(): void {
    this.getCourses();
  }
  getCourses() {
    this.commonService.getCoursesData().subscribe((res: any) => {
      res.forEach((element: any) => {
        this.CourseList.push(element);
      });
    });
  }
}
