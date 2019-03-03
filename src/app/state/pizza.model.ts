import { ID } from '@datorama/akita';

let id = 1;

export interface Pizza {
  id: ID;
  toppings: Topping[];
}

export function createPizza() {
  return {
    id: id++,
    toppings: []
  } as Pizza;
}

export type Topping =
  | 'basil'
  | 'chili peppers'
  | 'mozzarella'
  | 'mushrooms'
  | 'olives'
  | 'tomatoes';


export const toppingsList: Topping[] =
  ['basil',
    'chili peppers',
    'mozzarella',
    'mushrooms',
    'olives',
    'tomatoes'];