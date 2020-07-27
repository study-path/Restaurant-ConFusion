import { Injectable } from '@angular/core';

import { PromotionModel } from './../shared/models/promotion-model';
import { PROMOTIONS } from './../shared/models/promotions';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor() {}

  getPromotions(): PromotionModel[] {
    return PROMOTIONS;
  }

  getPromotion(id: string): PromotionModel {
    return PROMOTIONS.filter((promo) => promo.id === id)[0];
  }

  getFeaturedPromotion(): PromotionModel {
    return PROMOTIONS.filter((promo) => promo.featured)[0];
  }
}
