import { Component, Inject, OnInit } from '@angular/core';

import { expand, flyInOut } from '../animations/app.animation';
import { DishService } from './../services/dish.service';
import { DishModel } from './../shared/models/dish-model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    style: 'display:block;',
  },
  animations: [flyInOut(), expand()],
})
export class MenuComponent implements OnInit {
  dishes: DishModel[];
  errMessage: string;

  constructor(
    private dishService: DishService,
    @Inject('BaseURL') private BaseURL
  ) {}

  ngOnInit(): void {
    this.dishService.getDishes().subscribe(
      (dishes) => (this.dishes = dishes),
      (errMessage) => (this.errMessage = <any>errMessage)
    );
  }
}
