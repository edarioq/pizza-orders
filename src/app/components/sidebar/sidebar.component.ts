import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private sidebar: any;

  constructor() { }

  ngOnInit() {
    this.sidebar = [
      {
        name: 'Dashboard',
        icon: 'dashboard.svg',
        active: false
      },
      {
        name: 'New Order',
        icon: 'new-order.svg',
        active: true
      },
      {
        name: 'Status',
        icon: 'order-status.svg',
        active: false
      }
    ]
  }

}
