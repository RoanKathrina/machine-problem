import { Component, OnInit } from '@angular/core';
import { OrderPageService } from '../order-page.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private orderPageService: OrderPageService) { }

  ngOnInit() {
  }

  deleteItem(burgerType: string) {
    const burgerObj = {
      burgerType: burgerType,
      operation: 'delete'
    }
    this.orderPageService.burger.next(burgerObj);
  }

  addItem(burgerType: string) {
    const burgerObj = {
      burgerType: burgerType,
      operation: 'add'
    }
    this.orderPageService.burger.next(burgerObj);
  }
}
