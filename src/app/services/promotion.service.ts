import { Injectable } from '@angular/core';

import { PromotionModel } from './../shared/models/promotion-model';
import { PROMOTIONS } from './../shared/models/promotions';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor() {}

  getPromotions(): Promise<PromotionModel[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(PROMOTIONS), 2000);
    });
  }

  getPromotion(id: string): Promise<PromotionModel> {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(PROMOTIONS.filter((promo) => promo.id === id)[0]),
        2000
      );
    });
  }

  getFeaturedPromotion(): Promise<PromotionModel> {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(PROMOTIONS.filter((promo) => promo.featured)[0]),
        2000
      );
    });
  }
}
