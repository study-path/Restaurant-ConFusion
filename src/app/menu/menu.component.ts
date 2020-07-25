import { Component, OnInit } from '@angular/core';

import { DISHES } from '../shared/models/dishes-model';
import { DishModel } from './../shared/models/dish-model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishes: DishModel[] = DISHES;

  selectedDish: DishModel;

  constructor() {}

  ngOnInit(): void {}

  onSelect(dish: DishModel) {
    this.selectedDish = dish;
  }
}
