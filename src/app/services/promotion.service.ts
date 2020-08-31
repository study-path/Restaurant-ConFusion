import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { baseURL } from '../shared/baseURL';
import { PromotionModel } from './../shared/models/promotion-model';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor(
    private httpClient: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  getPromotions(): Observable<PromotionModel[]> {
    return this.httpClient
      .get<PromotionModel[]>(baseURL + 'promotions')
      .pipe(catchError(this.processHTTPMsgService.handlerError));
  }

  getPromotion(id: string): Observable<PromotionModel> {
    return this.httpClient
      .get<PromotionModel>(baseURL + 'promotions/' + id)
      .pipe(catchError(this.processHTTPMsgService.handlerError));
  }

  getFeaturedPromotion(): Observable<PromotionModel> {
    return this.httpClient
      .get<PromotionModel>(baseURL + 'promotions?featured=true')
      .pipe(map((promotions) => promotions[0]))
      .pipe(catchError(this.processHTTPMsgService.handlerError));
  }
}
