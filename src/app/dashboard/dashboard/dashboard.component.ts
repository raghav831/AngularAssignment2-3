import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { courses } from '../courses';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  pageFrom = 'DashBoard';
  CourseList: courses[] = [];
  constructor(private commonService: DashboardServiceService, private router:Router) {}
  ngOnInit(): void {
    console.log('came here');
    this.getCourses();
  }
  // ngDoCheck(){
  //   this.getCourses();
  // }
  getCourses() {
    this.commonService.getCoursesData().subscribe((res: any) => {
      res.forEach((element: any) => {
        this.CourseList.push(element);
      });
    });
    // if(this.commonService.sortValue == "L"){
    //   console.log('came here');
    //   this.CourseList.sort((a, b) => (a.price) - (b.price));
    //   this.router.navigateByUrl('/dashboard');
    // }else if(this.commonService.sortValue == 'H'){
    //   this.CourseList.sort((a, b) => (b.price) - (a.price));
    //   this.router.navigateByUrl('/dashboard');
    // }
  }
  // onOptionsSelected(valu:any){
  //   console.log('came here123');
  //   console.log(valu);
  // this.commonService.updateSortVaribale= valu;
  // }
}
