import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { DISHES } from '../shared/models/dishes-model';
import { DishModel } from './../shared/models/dish-model';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor() {}

  getDishes(): Observable<DishModel[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: string): Observable<DishModel> {
    return of(DISHES.filter((dish) => dish.id === id)[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<DishModel> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }
}
