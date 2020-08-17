import { Injectable } from '@angular/core';

import { DISHES } from '../shared/models/dishes-model';
import { DishModel } from './../shared/models/dish-model';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor() {}

  getDishes(): Promise<DishModel[]> {
    return Promise.resolve(DISHES);
  }

  getDish(id: string): Promise<DishModel> {
    return Promise.resolve(DISHES.filter((dish) => dish.id === id)[0]);
  }

  getFeaturedDish(): Promise<DishModel> {
    return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }
}
