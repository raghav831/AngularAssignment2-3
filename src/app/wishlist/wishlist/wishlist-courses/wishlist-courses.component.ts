import { Component, Input, OnInit } from '@angular/core';
import { courses } from 'src/app/dashboard/courses';
import { DashboardServiceService } from 'src/app/dashboard/dashboard-service.service';

@Component({
  selector: 'app-wishlist-courses',
  templateUrl: './wishlist-courses.component.html',
  styleUrls: ['./wishlist-courses.component.css'],
})
export class WishlistCoursesComponent implements OnInit {
  WishListItems: any = [];
  @Input() courses: courses[] = [];
  wishListToDisplay: courses[] = [];
  showStar: any;
  ngOnInit(): void {
    this.getCartList();
  }
  ngDoCheck() {
    this.getCartList();
  }
  constructor(private commonService: DashboardServiceService) {}
  getCartList() {
    this.wishListToDisplay = [];
    this.WishListItems = this.commonService.wishList;
    this.courses.filter((item) => {
      if (this.WishListItems.includes(item.id)) {
        this.wishListToDisplay.push(item);
      }
    });
  }
  deleteFromWishList(id: any) {
    this.commonService.updateWishList(id);
    this.showStar = this.commonService.showStar;
    this.showStar[id] = !this.showStar[id];
  }
  updateCartFromWishList(id: any) {
    this.showStar = this.commonService.showStar;
    this.showStar[id] = !this.showStar[id];
    this.commonService.updateCartFromWhisList(id);
  }
}
