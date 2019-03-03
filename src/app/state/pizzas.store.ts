import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState, getInitialEntitiesState, ID, push, toggle, transaction } from '@datorama/akita';
import { Pizza, createPizza, Topping } from './pizza.model';



export interface PizzasState extends EntityState<Pizza>, ActiveState {}

const state = {
  ...getInitialEntitiesState()
};

@Injectable({
  providedIn: 'root'
})

@StoreConfig({ name: 'pizzas' })
export class PizzasStore extends EntityStore<PizzasState, Pizza> {
  constructor() {
    super(state);
    this.addNewPizza();
  }

  @transaction()
  addNewPizza() {
    const newPizza = createPizza();
    this.add(newPizza);
    this.setActive(newPizza.id);
  }

  toggleTopping(topping: Topping, activePizzaID: ID) {
    this.update(activePizzaID, pizza => {
      return {
        ...pizza,
        toppings: toggle(pizza.toppings, topping)
      };
    });
  }
}