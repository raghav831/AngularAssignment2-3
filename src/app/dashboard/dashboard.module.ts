import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser'
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { DiscountPipe } from '../discount.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    CoursesComponent,
    CartComponent,
    CourseDetailComponent,
    DiscountPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    
  ],
  exports:[CartComponent,DiscountPipe],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DashboardModule { }
