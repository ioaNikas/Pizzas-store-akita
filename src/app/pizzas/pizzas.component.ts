import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza, Topping, toppingsList } from '../state/pizza.model';
import { ID } from '@datorama/akita';
import { PizzasQuery, PizzasService } from '../state';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  pizzas$: Observable<Pizza[]>;
  activePizzaToppings$: Observable<Topping[]>;
  toppings: Topping[];

  constructor(
    private pizzasQuery : PizzasQuery,
    private pizzasService : PizzasService) { }

  ngOnInit() {
    this.pizzas$ = this.pizzasQuery.selectAll();
    this.activePizzaToppings$ = this.pizzasQuery.selectPizzaToppings();
    this.toppings = toppingsList;
  }

  get activePizzaId(): ID {
    return this.pizzasQuery.getActiveId();
  }

  public newPizza() {
    this.pizzasService.add();
  }

  public toggleTopping(topping: Topping) {
    this.pizzasService.toggleTopping(topping, this.pizzasQuery.getActiveId())
  }

  public setActivePizza(id : ID) {
    this.pizzasService.setActivePizza(id);
  }

}
