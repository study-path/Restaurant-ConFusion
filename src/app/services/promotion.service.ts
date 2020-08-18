import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { PromotionModel } from './../shared/models/promotion-model';
import { PROMOTIONS } from './../shared/models/promotions';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor() {}

  getPromotions(): Observable<PromotionModel[]> {
    return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotion(id: string): Observable<PromotionModel> {
    return of(PROMOTIONS.filter((promo) => promo.id === id)[0]).pipe(
      delay(2000)
    );
  }

  getFeaturedPromotion(): Observable<PromotionModel> {
    return of(PROMOTIONS.filter((promo) => promo.featured)[0]).pipe(
      delay(2000)
    );
  }
}
