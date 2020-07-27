import { Component, OnInit } from '@angular/core';

import { DishService } from '../services/dish.service';
import { DishModel } from '../shared/models/dish-model';
import { PromotionModel } from '../shared/models/promotion-model';
import { LeaderService } from './../services/leader.service';
import { PromotionService } from './../services/promotion.service';
import { LeaderModel } from './../shared/models/leader-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dish: DishModel;
  promotion: PromotionModel;
  leader: LeaderModel;

  constructor(
    private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService
  ) {}

  ngOnInit(): void {
    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
    this.leader = this.leaderService.getFeaturedLeader();
  }
}