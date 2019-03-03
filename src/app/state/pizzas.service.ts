import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { PizzasStore } from './pizzas.store';
import { createPizza, Topping } from './pizza.model';

@Injectable({
  providedIn: 'root'
})

export class PizzasService {
  constructor(private pizzasStore: PizzasStore) {}

  add() {
    this.pizzasStore.addNewPizza();
  }

  setActivePizza(id: ID) {
    this.pizzasStore.setActive(id);
  }

  toggleTopping(topping: Topping, activePizzaID: ID) {
    this.pizzasStore.toggleTopping(topping, activePizzaID);
  }
}