import { Injectable } from '@angular/core';

import { DISHES } from '../shared/models/dishes-model';
import { DishModel } from './../shared/models/dish-model';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor() {}

  getDishes(): DishModel[] {
    return DISHES;
  }

  getDish(id: string): DishModel {
    return DISHES.filter((dish) => dish.id === id)[0];
  }

  getFeaturedDish(): DishModel {
    return DISHES.filter((dish) => dish.featured)[0];
  }
}
