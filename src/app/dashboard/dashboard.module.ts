import { CUSTOM_ELEMENTS_SCHEMA, NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser'
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { DiscountPipe } from '../discount.pipe';
import { PaginationModule } from '../pagination/pagination.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { ValidityCheckPipe } from '../validity-check.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    CoursesComponent,
    CartComponent,
    CourseDetailComponent,
    DiscountPipe,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    PaginationModule
    
  ],
  exports:[CartComponent,DiscountPipe,CoursesComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class DashboardModule { }
