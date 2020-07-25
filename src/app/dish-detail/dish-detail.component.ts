import { Component, Input, OnInit } from '@angular/core';

import { DishModel } from './../shared/models/dish-model';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss'],
})
export class DishDetailComponent implements OnInit {
  @Input()
  dish: DishModel;

  constructor() {}

  ngOnInit(): void {}
}
