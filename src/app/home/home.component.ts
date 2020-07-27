import { Component, OnInit } from '@angular/core';

import { DishService } from '../services/dish.service';
import { DishModel } from '../shared/models/dish-model';
import { PromotionModel } from '../shared/models/promotion-model';
import { PromotionService } from './../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dish: DishModel;
  promotion: PromotionModel;

  constructor(
    private dishService: DishService,
    private promotionService: PromotionService
  ) {}

  ngOnInit(): void {
    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
  }
}
