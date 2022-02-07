import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { courses } from '../courses';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  CourseList: courses[] = [];
  cartItems: any = [];
  CartItemstoDisplay: courses[] = [];
  totalCartPrice = 0;
  totalCartPriceOriginal = 0;
  RecommendedCourses: any;
  RecommendedCoursesList: courses[] = [];
  constructor(private commonService: DashboardServiceService,private modalService: NgbModal) {}
  ngOnInit(): void {
    this.getCourses();
    this.getCartList();
    setTimeout(() => {
      this.getRandomList();
    }, 100);
  }

  getCourses() {
    this.commonService.getCoursesData().subscribe((res: any) => {
      res.forEach((element: any) => {
        this.CourseList.push(element);
      });
    });
  }
  ngDoCheck() {
    this.getCartList();
  }
  getRandomList() {
    const num = 2;
    const range = [1, 7];
    const randomBetween = (a: any, b: any) => {
      return (Math.random() * (b - a) + a).toFixed(2) << 0;
    };
    const randomBetweenRange = (num: any, range: any) => {
      const res: any = [];
      for (let i = 0; i < num; ) {
        const random = randomBetween(range[0], range[1]);
        if (!res.includes(random)) {
          res.push(random);
          console.log(typeof random);
          i++;
        }
      }
      return res;
    };
    this.RecommendedCourses = randomBetweenRange(num, range);

    console.log(this.RecommendedCourses);
    console.log(this.CourseList, 'inside recommendation');
    this.RecommendedCourses.forEach((element: any) => {
      this.RecommendedCoursesList.push(this.CourseList[element]);
    });
    console.log(this.RecommendedCoursesList, 'final');
  }
  getCartList() {
    this.CartItemstoDisplay = [];
    this.totalCartPrice = 0;
    this.totalCartPriceOriginal = 0;
    this.cartItems = this.commonService.cart;
    this.CourseList.filter((item) => {
      if (this.cartItems.includes(item.id)) {
        this.CartItemstoDisplay.push(item);
        this.totalCartPriceOriginal += item.price;
        this.totalCartPrice += item.price - (item.price * item.discount) / 100;
      }
    });
    this.totalCartPriceOriginal =
      this.totalCartPriceOriginal - this.totalCartPrice;
  }


  moveToWishList(id: any) {
    this.commonService.removeFromCart(id);
    this.commonService.updateWishList(id);
  }
  deleteFromCart(id: any) {
    this.commonService.removeFromCart(id);
    this.CourseList.filter((item) => {
      if (this.cartItems.includes(item.id)) {
        var discountPrice = item.price - (item.price * item.discount) / 100;
        this.totalCartPrice = this.totalCartPrice - discountPrice;
        this.totalCartPriceOriginal =
          this.totalCartPriceOriginal - (item.price - discountPrice);
      }
    });
  }
  GotoCourseDetails(id: any) {}
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
  clickCheckOut(content: any) {
    this.commonService.emptyCart();
    this.totalCartPriceOriginal = 0;
    this.openVerticallyCentered(content);
  }
}
