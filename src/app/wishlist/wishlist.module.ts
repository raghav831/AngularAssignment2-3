import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistCoursesComponent } from './wishlist/wishlist-courses/wishlist-courses.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { DiscountPipe } from '../discount.pipe';

@NgModule({
  declarations: [WishlistComponent, WishlistCoursesComponent],
  imports: [CommonModule, DashboardModule],
})
export class WishlistModule {}
