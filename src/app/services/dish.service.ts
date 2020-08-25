import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { baseURL } from '../shared/baseURL';
import { DishModel } from './../shared/models/dish-model';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor(
    private httpClient: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  getDishes(): Observable<DishModel[]> {
    return this.httpClient
      .get<DishModel[]>(baseURL + 'dishes')
      .pipe(catchError(this.processHTTPMsgService.handlerError));
  }

  getDish(id: string): Observable<DishModel> {
    return this.httpClient
      .get<DishModel>(baseURL + 'dishes/' + id)
      .pipe(catchError(this.processHTTPMsgService.handlerError))
      .pipe(catchError(this.processHTTPMsgService.handlerError));
  }

  getFeaturedDish(): Observable<DishModel> {
    return this.httpClient
      .get<DishModel>(baseURL + 'dishes?featured=true')
      .pipe(map((dishes) => dishes[0]));
  }

  getDishIds(): Observable<string[] | any> {
    return this.getDishes()
      .pipe(map((dishes) => dishes.map((dish) => dish.id)))
      .pipe(catchError((error) => error));
  }

  putDish(dish: DishModel): Observable<DishModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.httpClient
      .put<DishModel>(baseURL + 'dishes/' + dish.id, dish, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handlerError));
  }
}
