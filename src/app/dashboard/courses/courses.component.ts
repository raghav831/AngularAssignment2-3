import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { courses } from '../courses';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  showStar: any;
  show=true;
  @Input() courses: courses[] = [];
  constructor(
    private CommonService: DashboardServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.showStar = this.CommonService.showStar;

  }
  ngDoCheck() {
    this.ngOnInit();

  }
  addToCart(id: any) {
    this.CommonService.updateCart(id);
  }
  async addToWishlist(id: any) {
    await this.CommonService.updateWishList(id);
    this.showStar = this.CommonService.showStar;
    this.showStar[id] = !this.showStar[id];
  }
  GotoCourseDetails(id: any) {
    this.router.navigateByUrl('/courseDetail/' + id);
  }
  closeModel(){

  }
}
