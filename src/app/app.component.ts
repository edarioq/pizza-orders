import { Component, OnInit } from '@angular/core';
import { OrderService } from './services/order.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  orders: any = '';

  constructor(
    private _orderService: OrderService
  ) { }

  ngOnInit(): void {
    this._orderService.getData().subscribe(
      res => {
        this.orders = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
