import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { courses } from './courses';

@Injectable({
  providedIn: 'root',
})
export class DashboardServiceService {
  updateCartFromWhisList(id: any) {
    this.wishList = this.wishList.filter(function (item: String) {
      return item !== id;
    });
    this.updateCart(id);
  }
  cart: any = [];
  wishList: any = [];
  showStar = Array(10).fill(true);
  updateWishList(id: number) {
    if (this.wishList.includes(id)) {
      this.wishList = this.wishList.filter((item: number) => item != id);
      this.showStar[id] == !this.showStar[id];
    } else {
      this.wishList.push(id);
    }
  }
  updateCart(id: String) {
    if (this.cart.includes(id)) {
      alert('already added in the cart');
    } else {
      this.cart.push(id);
    }
  }
  removeFromWishList(id: String) {
    this.wishList = this.wishList.filter((item: String) => item != id);
  }
  constructor(private http: HttpClient) {}
  public url = './assets/courses.json';
  getCoursesData(): Observable<courses> {
    return this.http.get<courses>(this.url);
  }
}
