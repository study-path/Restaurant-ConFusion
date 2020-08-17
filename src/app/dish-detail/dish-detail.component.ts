import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DishService } from './../services/dish.service';
import { DishModel } from './../shared/models/dish-model';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss'],
})
export class DishDetailComponent implements OnInit {
  dish: DishModel;

  constructor(
    private dishService: DishService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.dish = this.dishService.getDish(id);
  }

  goBack(): void {
    this.location.back();
  }
}
