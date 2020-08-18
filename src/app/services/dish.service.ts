import { Injectable } from '@angular/core';

import { DISHES } from '../shared/models/dishes-model';
import { DishModel } from './../shared/models/dish-model';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor() {}

  getDishes(): Promise<DishModel[]> {
    return new Promise((resolve) => {
      //Simulate server latency with 2 second delay
      setTimeout(() => resolve(DISHES), 2000);
    });
  }

  getDish(id: string): Promise<DishModel> {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(DISHES.filter((dish) => dish.id === id)[0]),
        2000
      );
    });
  }

  getFeaturedDish(): Promise<DishModel> {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(DISHES.filter((dish) => dish.featured)[0]),
        2000
      );
    });
  }
}
