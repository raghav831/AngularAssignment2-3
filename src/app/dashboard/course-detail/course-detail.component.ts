import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { courses } from '../courses';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  courseIdRouted: any;
  courseViewed: courses[] = [];
  courses: courses[] = [];
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private commonService: DashboardServiceService
  ) {}
  date = new Date();
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.courseIdRouted = params.get('courseId');
    });
    this.getCourses();
  }
  getCourses() {
    this.commonService.getCoursesData().subscribe((res: any) => {
      res.forEach((element: any) => {
        if (element.id == this.courseIdRouted) this.courses.push(element);
      });
    });
  }
  addToWishlist(id: any) {
   this.commonService.updateWishList(id);
  }
  addToCart(id: any) {
    this.commonService.updateCart(id);
  }
  goToAllCourses(){
  this.router.navigateByUrl("/dashboard");
  }
}
