import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Size } from '../../models/size';
import { Topping } from '../../models/topping';
import { Pizza } from '../../models/pizza';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {
  pizza: Pizza;
  pizzas: Array<Pizza> = [];
  orderedPizzas: Array<Pizza> = [];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.orderService.getData().subscribe(
      res => {
        this.pizza = res;
        this.pizzas.push(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  public selectSize(pizza: Pizza, size: Size): void {
    pizza.sizes.map((s: Size) => {
      s.selected = false;
    });
    size.selected = true;
  }

  public selectToppings(topping: Topping): void {
    topping.selected = !topping.selected;
  }

  public addPizza(): void {
    const pizzaSizes = this.pizza.sizes.map(p => Object.assign({}, p));
    const pizzaToppings = this.pizza.toppings.map(p => Object.assign({}, p));
    pizzaSizes.map((s) => { s.selected = false; });
    pizzaToppings.map((t) => { t.selected = false; });
    const pizza = {
      sizes: pizzaSizes,
      toppings: pizzaToppings
    };

    this.pizzas.push(pizza);
  }

  public removePizza(i: number): void {
    if (this.pizzas.length !== 1) {
      this.pizzas.splice(i, 1);
    }
  }

  public getOrderedPizzas(): Array<Pizza> {
    const selectedPizzas = [];
    for (const pizza of this.pizzas) {
      const selectedSize = pizza.sizes.filter(s => s.selected);
      const selectedToppings = pizza.toppings.filter(t => t.selected);
      selectedPizzas.push({
        sizes: selectedSize,
        toppings: selectedToppings
      });
    }
    return selectedPizzas;
  }

  public paintDots(num: number): string {
    return '.'.repeat(num);
  }

  public calculateTotal(): string {
    let total = 0;
    this.getOrderedPizzas().map((pizza) => {
      if (pizza.sizes[0]) {
        total += pizza.sizes[0].price;
      }
      if (pizza.toppings) {
        pizza.toppings.map((topping) => {
          total += topping.price;
        });
      }
    });
    return 'GBP ' + total.toFixed(2);
  }
}
