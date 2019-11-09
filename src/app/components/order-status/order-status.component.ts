import { Component, OnInit } from '@angular/core';
import { OrderStatusService } from '../../services/order-status/order-status.service';
import { Order } from '../../models/order';

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
        this.orders = res.orders;
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
  }

  public cancel(order: Order): void {
    order.canceled = true;
  }

  public markCompleted(order: Order): void {
    order.completed = true;
  }

  public printSummary(): void {
    window.print();
  }
}
