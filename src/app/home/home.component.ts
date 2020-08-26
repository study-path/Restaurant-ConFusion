import { Component, Inject, OnInit } from '@angular/core';

import { expand, flyInOut } from '../animations/app.animation';
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
  host: {
    '[@flyInOut]': 'true',
    style: 'display:block;',
  },
  animations: [flyInOut(), expand()],
})
export class HomeComponent implements OnInit {
  dish: DishModel;
  promotion: PromotionModel;
  leader: LeaderModel;

  dishErrMessage: string;

  constructor(
    private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') private BaseURL
  ) {}

  ngOnInit(): void {
    this.dishService.getFeaturedDish().subscribe(
      (dish) => (this.dish = dish),
      (dishErrMessage) => (this.dishErrMessage = <any>dishErrMessage)
    );

    this.promotionService
      .getFeaturedPromotion()
      .subscribe((promotion) => (this.promotion = promotion));

    this.leaderService
      .getFeaturedLeader()
      .subscribe((leader) => (this.leader = leader));
  }
}
