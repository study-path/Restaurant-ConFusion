import { Injectable } from '@angular/core';

import { PromotionModel } from './../shared/models/promotion-model';
import { PROMOTIONS } from './../shared/models/promotions';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor() {}

  getPromotions(): Promise<PromotionModel[]> {
    return Promise.resolve(PROMOTIONS);
  }

  getPromotion(id: string): Promise<PromotionModel> {
    return Promise.resolve(PROMOTIONS.filter((promo) => promo.id === id)[0]);
  }

  getFeaturedPromotion(): Promise<PromotionModel> {
    return Promise.resolve(PROMOTIONS.filter((promo) => promo.featured)[0]);
  }
}
