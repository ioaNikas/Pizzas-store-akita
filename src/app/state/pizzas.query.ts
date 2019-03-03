import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { PizzasStore, PizzasState } from './pizzas.store';
import { Pizza, Topping } from './pizza.model';
import { combineLatest, of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PizzasQuery extends QueryEntity<PizzasState, Pizza> {
  constructor(protected store: PizzasStore) {
    super(store);
  }

  selectPizzaToppings(): Observable<Topping[]> {
    return this.selectActive().pipe(
      map(pizza => {
        return pizza.toppings;
      })
    );
  }
}