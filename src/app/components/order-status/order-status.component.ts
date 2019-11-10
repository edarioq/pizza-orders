import { Component, OnInit } from '@angular/core';
import { OrderStatusService } from '../../services/order-status/order-status.service';
import { Order } from '../../models/order';

import * as moment from 'moment';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {

  orders: Array<Order>;

  constructor(private orderStatusService: OrderStatusService) { }

  ngOnInit() {
    this.orderStatusService.getOrders().subscribe(
      res => {
        const now = moment(new Date());
        this.orders = res.orders;
        this.orders.map((order) => {
          order._duration = now.diff(order.time, 'minutes');
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  public isNewOrder(order: Order): boolean {
    return !order.accepted && !order.transit &&
      !order.completed && !order.canceled;
  }

  public accept(order: Order): void {
    order.accepted = true;
    console.log(order);
    this.updateOrder(order);
  }

  public cancel(order: Order): void {
    order.canceled = true;
    this.updateOrder(order);
  }

  public markCompleted(order: Order): void {
    order.completed = true;
    this.updateOrder(order);
  }

  public printSummary(): void {
    window.print();
  }

  public updateOrder(order: Order): void {
    this.orderStatusService.updateOrder(order).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
