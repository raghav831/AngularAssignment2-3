import { Component, OnInit } from '@angular/core';
import { courses } from 'src/app/dashboard/courses';
import { DashboardServiceService } from 'src/app/dashboard/dashboard-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
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
