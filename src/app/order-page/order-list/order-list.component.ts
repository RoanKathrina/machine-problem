import { Component, OnInit } from '@angular/core';
import { OrderPageService } from '../order-page.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private orderPageService: OrderPageService) { }
  private burgers = {
    BurgerRoan: 0,
    CheeseBurger: 0,
    BigMac: 0,
    CheeseBurgerDeLuxe: 0,
    CheesyBurgerRoan: 0,
    DoubleCheeseBurger: 0,
    FilletOFish: 0,
    McChicken: 0,
    QuarterPounderWithCheese: 0,
    BullyBoy: 0
  }
  private totalPrice: number = 0;

  ngOnInit() {
    this.orderPageService.burger.subscribe((burgerObj: any) => {
      if(burgerObj.operation === 'delete') {
        if (this.orderPageService.getBurgerTotal(burgerObj.burgerType) === 0) {
          return;
        }
        else {
          this.orderPageService.deleteItem(burgerObj.burgerType);
        }
        //Check the total value of Burger Roan
        // If BurgerRoan === 0
        // return
        // Else: deleteItem
      }
      else {
        // Add new item of Burger Roan
        this.orderPageService.addItem(burgerObj.burgerType);
      }
      this.burgers.BurgerRoan = this.orderPageService.getBurgerTotal('BurgerRoan');
      this.burgers.CheeseBurger = this.orderPageService.getBurgerTotal('CheeseBurger');
      this.burgers.BigMac = this.orderPageService.getBurgerTotal('BigMac');
      this.burgers.CheeseBurgerDeLuxe = this.orderPageService.getBurgerTotal('CheeseBurgerDeLuxe');
      this.burgers.CheesyBurgerRoan = this.orderPageService.getBurgerTotal('CheesyBurgerRoan');
      this.burgers.DoubleCheeseBurger = this.orderPageService.getBurgerTotal('DoubleCheeseBurger');
      this.burgers.FilletOFish = this.orderPageService.getBurgerTotal('FilletOFish');
      this.burgers.McChicken = this.orderPageService.getBurgerTotal('McChicken');
      this.burgers.QuarterPounderWithCheese = this.orderPageService.getBurgerTotal('QuarterPounderWithCheese');
      this.burgers.BullyBoy = this.orderPageService.getBurgerTotal('BullyBoy');
      this.totalPrice = this.orderPageService.getTotalPrice();
    })
  }

  clearCart() {
    this.orderPageService.clearBurgerCount();
    this.orderPageService.clearTotalPrice();
    this.burgers.BurgerRoan = this.orderPageService.getBurgerTotal('BurgerRoan');
    this.burgers.CheeseBurger = this.orderPageService.getBurgerTotal('CheeseBurger');
    this.burgers.BigMac = this.orderPageService.getBurgerTotal('BigMac');
    this.burgers.CheeseBurgerDeLuxe = this.orderPageService.getBurgerTotal('CheeseBurgerDeLuxe');
    this.burgers.CheesyBurgerRoan = this.orderPageService.getBurgerTotal('CheesyBurgerRoan');
    this.burgers.DoubleCheeseBurger = this.orderPageService.getBurgerTotal('DoubleCheeseBurger');
    this.burgers.FilletOFish = this.orderPageService.getBurgerTotal('FilletOFish');
    this.burgers.McChicken = this.orderPageService.getBurgerTotal('McChicken');
    this.burgers.QuarterPounderWithCheese = this.orderPageService.getBurgerTotal('QuarterPounderWithCheese');
    this.burgers.BullyBoy = this.orderPageService.getBurgerTotal('BullyBoy');
    this.totalPrice = this.orderPageService.getTotalPrice();   
  }

  
}
