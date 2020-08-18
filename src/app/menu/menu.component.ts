import { Component, OnInit } from '@angular/core';

import { DishService } from './../services/dish.service';
import { DishModel } from './../shared/models/dish-model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishes: DishModel[];

  selectedDish: DishModel;

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.dishService.getDishes().subscribe((dishes) => (this.dishes = dishes));
  }

  onSelect(dish: DishModel) {
    this.selectedDish = dish;
  }
}
