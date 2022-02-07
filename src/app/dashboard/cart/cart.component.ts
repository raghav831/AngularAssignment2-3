import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { courses } from '../courses';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private commonService: DashboardServiceService,private router:Router) {}

  cartItems: any = [];
  @Input() courses: courses[] = [];
  CartItemstoDisplay: courses[] = [];
  totalCartPrice = 0;
  ngOnInit(): void {
    this.getCartList();
  }
  ngDoCheck() {
    this.getCartList();
  }
  getCartList() {
    this.CartItemstoDisplay = [];
    this.totalCartPrice = 0;
    this.cartItems = this.commonService.cart;
    this.courses.filter((item) => {
      if (this.cartItems.includes(item.id)) {
        this.CartItemstoDisplay.push(item);
        this.totalCartPrice += (item.price-(item.price*item.discount)/100);
      }
    });
  }
  navigateToCheckout(){
    this.router.navigateByUrl("/checkout");
  }
}
